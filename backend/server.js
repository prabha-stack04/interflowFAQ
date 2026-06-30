const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');
const questionRoutes = require('./routes/questionRoutes');
const answerRoutes = require('./routes/answerRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/answers', answerRoutes);

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'InternFlow AI backend is running.' });
});

// ENV
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/internflow-ai';

// 🔥 IMPORTANT DEBUG LOGS (ADDED)
mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB Connected Successfully');
});

mongoose.connection.on('error', (err) => {
  console.log('❌ MongoDB Connection Error:', err);
});

// Connect DB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('🚀 Database connected:', MONGO_URI);

    app.listen(PORT, () => {
      console.log(`🔥 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  });