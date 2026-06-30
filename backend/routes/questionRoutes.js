const express = require('express');
const {
  getQuestions,
  createQuestion,
  getQuestionById,
  updateQuestion,
  deleteQuestion
} = require('../controllers/questionController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getQuestions);
router.post('/', authMiddleware, createQuestion);
router.get('/:id', authMiddleware, getQuestionById);
router.put('/:id', authMiddleware, updateQuestion);
router.delete('/:id', authMiddleware, deleteQuestion);

module.exports = router;
