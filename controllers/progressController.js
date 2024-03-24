// backend/controllers/progressController.js
const Progress = require('../models/Progress');

const getAllProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.user.id });
    res.json(progress);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const createProgress = async (req, res) => {
  const { date, weight, bodyFat } = req.body;

  try {
    const newProgress = new Progress({ user: req.user.id, date, weight, bodyFat });
    await newProgress.save();

    res.status(201).json(newProgress);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const updateProgress = async (req, res) => {
  const { weight, bodyFat } = req.body;

  try {
    let progress = await Progress.findById(req.params.id);
    if (!progress) {
      return res.status(404).json({ error: 'Progress not found' });
    }

    progress.weight = weight;
    progress.bodyFat = bodyFat;

    await progress.save();

    res.json(progress);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteProgress = async (req, res) => {
  try {
    let progress = await Progress.findById(req.params.id);
    if (!progress) {
      return res.status(404).json({ error: 'Progress not found' });
    }

    await progress.remove();

    res.json({ message: 'Progress deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getAllProgress, createProgress, updateProgress, deleteProgress };
