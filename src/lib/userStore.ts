import fs from 'fs/promises';
import path from 'path';
import { Document } from 'mongodb';
import { getDb } from './mongodb';

const dataFile = path.join(process.cwd(), 'data', 'users.json');

export interface StoredUser {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'intern';
  team?: string | null;
  joinDate: string;
  avatarUrl?: string;
  streak: number;
  tasksCompleted: number;
  tasks?: unknown[];
}

async function ensureDataDirectory() {
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
}

async function readUserFile(): Promise<StoredUser[]> {
  try {
    const file = await fs.readFile(dataFile, 'utf8');
    const parsed = JSON.parse(file);
    return Array.isArray(parsed.users) ? parsed.users : [];
  } catch (error: any) {
    if (error?.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function writeUserFile(users: StoredUser[]) {
  await ensureDataDirectory();
  await fs.writeFile(dataFile, JSON.stringify({ users }, null, 2), 'utf8');
}

async function getMongoUserCollection<T extends Document>() {
  const db = await getDb();
  return db.collection<T>('users');
}

async function isMongoAvailable() {
  try {
    if (!process.env.MONGODB_URI && !process.env.MONGO_URI) return false;
    await getMongoUserCollection<StoredUser>();
    return true;
  } catch {
    return false;
  }
}

export async function findUserByEmail(email: string): Promise<StoredUser | null> {
  const normalized = email.toLowerCase();
  if (await isMongoAvailable()) {
    const collection = await getMongoUserCollection();
    return (await collection.findOne({ email: normalized })) as StoredUser | null;
  }
  const users = await readUserFile();
  return users.find((user) => user.email.toLowerCase() === normalized) ?? null;
}

export async function createUser(user: StoredUser): Promise<StoredUser> {
  if (await isMongoAvailable()) {
    const collection = await getMongoUserCollection();
    await collection.insertOne(user);
    return user;
  }
  const users = await readUserFile();
  await writeUserFile([...users, user]);
  return user;
}

export async function updateUserByEmail(email: string, updated: Partial<StoredUser>): Promise<StoredUser | null> {
  const normalized = email.toLowerCase();
  if (await isMongoAvailable()) {
    const collection = await getMongoUserCollection<StoredUser>();
    const result = await collection.findOneAndUpdate(
      { email: normalized },
      { $set: updated },
      { returnDocument: 'after' as any }
    );
    return result.value ? (result.value as StoredUser) : null;
  }

  const users = await readUserFile();
  const index = users.findIndex((user) => user.email.toLowerCase() === normalized);
  if (index === -1) return null;
  users[index] = { ...users[index], ...updated } as StoredUser;
  await writeUserFile(users);
  return users[index];
}
