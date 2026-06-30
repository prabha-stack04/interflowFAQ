const Answer = require('../models/Answer');

exports.getAnswers = async (req, res) => {
  try {
    const answers = await Answer.find().populate('author', 'name email role').populate('question', 'title');
    res.json(answers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Unable to fetch answers.' });
  }
};

exports.createAnswer = async (req, res) => {
  try {
    const { questionId, content } = req.body;
    if (!questionId || !content) {
      return res.status(400).json({ message: 'Question ID and content are required.' });
    }

    const answer = await Answer.create({
      question: questionId,
      content,
      author: req.user.id
    });

    res.status(201).json(answer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Unable to create answer.' });
  }
};

exports.updateAnswer = async (req, res) => {
  try {
    const answer = await Answer.findById(req.params.id);
    if (!answer) {
      return res.status(404).json({ message: 'Answer not found.' });
    }
    if (answer.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized.' });
    }

    answer.content = req.body.content || answer.content;
    answer.accepted = typeof req.body.accepted === 'boolean' ? req.body.accepted : answer.accepted;

    await answer.save();
    res.json(answer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Unable to update answer.' });
  }
};

exports.deleteAnswer = async (req, res) => {
  try {
    const answer = await Answer.findById(req.params.id);
    if (!answer) {
      return res.status(404).json({ message: 'Answer not found.' });
    }
    if (answer.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized.' });
    }

    await Answer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Answer deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Unable to delete answer.' });
  }
};
