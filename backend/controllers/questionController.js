const Question = require('../models/Question');

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate('author', 'name email role');
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Unable to fetch questions.' });
  }
};

exports.createQuestion = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required.' });
    }

    const question = await Question.create({
      title,
      content,
      tags: tags || [],
      author: req.user.id
    });

    res.status(201).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Unable to create question.' });
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id).populate('author', 'name email role');
    if (!question) {
      return res.status(404).json({ message: 'Question not found.' });
    }
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Unable to fetch question.' });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found.' });
    }
    if (question.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized.' });
    }

    question.title = req.body.title || question.title;
    question.content = req.body.content || question.content;
    question.tags = req.body.tags || question.tags;
    question.status = req.body.status || question.status;

    await question.save();
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Unable to update question.' });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found.' });
    }
    if (question.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized.' });
    }

    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: 'Question deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Unable to delete question.' });
  }
};
