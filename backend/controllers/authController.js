const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, role, team } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      team: team || null,
      joinDate: new Date(),
      avatarUrl: role === 'admin'
        ? '/avatars/admin.png'
        : '/avatars/intern.png'
    });

    const savedUser = await newUser.save();

    if (!savedUser) {
      return res.status(500).json({ message: 'User not saved to database.' });
    }

    const token = generateToken(savedUser);

    return res.status(201).json({
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        role: savedUser.role,
        team: savedUser.team
      },
      token
    });

  } catch (error) {
    console.error('REGISTER ERROR:', error.message);
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    const user = await User.findOne({ email, role });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const token = generateToken(user);

    return res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        team: user.team
      },
      token
    });

  } catch (error) {
    console.error('LOGIN ERROR:', error.message);
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
};