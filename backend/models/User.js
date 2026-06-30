const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },

    role: {
      type: String,
      enum: ['admin', 'intern'],
      default: 'intern'
    },

    team: { type: String, default: null },

    joinDate: {
      type: Date,
      default: Date.now
    },

    avatarUrl: {
      type: String,
      default: function () {
        return this.role === 'admin'
          ? '/avatars/admin.png'
          : '/avatars/intern.png';
      }
    },

    streak: { type: Number, default: 0 },
    tasksCompleted: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);