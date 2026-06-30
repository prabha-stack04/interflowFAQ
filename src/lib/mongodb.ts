import { MongoClient } from 'mongodb';

const uri =
  process.env.MONGODB_URI ||
  process.env.MONGO_URI ||
  'mongodb://127.0.0.1:27017/internflow-ai';

let cachedClient: MongoClient | null = null;

export async function getMongoClient(): Promise<MongoClient> {
  if (cachedClient) return cachedClient;

  const client = new MongoClient(uri);
  await client.connect();

  cachedClient = client;
  return client;
}

// 🔥 FIXED: force correct DB name
export async function getDb() {
  const client = await getMongoClient();
  return client.db('internflow-ai');
}