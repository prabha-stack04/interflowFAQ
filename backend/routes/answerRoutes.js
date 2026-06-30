const express = require('express');
const {
  getAnswers,
  createAnswer,
  updateAnswer,
  deleteAnswer
} = require('../controllers/answerController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getAnswers);
router.post('/', authMiddleware, createAnswer);
router.put('/:id', authMiddleware, updateAnswer);
router.delete('/:id', authMiddleware, deleteAnswer);

module.exports = router;
