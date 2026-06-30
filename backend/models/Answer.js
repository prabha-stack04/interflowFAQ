const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema(
  {
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    accepted: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Answer', answerSchema);
