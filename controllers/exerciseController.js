// backend/controllers/exerciseController.js
const Exercise = require('../models/Exercise');

const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ error: 'Exercise not found' });
    }
    res.json(exercise);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const createExercise = async (req, res) => {
  const { name, description, sets, reps, weight } = req.body;

  try {
    const newExercise = new Exercise({ name, description, sets, reps, weight });
    await newExercise.save();
    res.status(201).json(newExercise);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const updateExercise = async (req, res) => {
  const { name, description, sets, reps, weight } = req.body;

  try {
    let exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ error: 'Exercise not found' });
    }

    exercise.name = name;
    exercise.description = description;
    exercise.sets = sets;
    exercise.reps = reps;
    exercise.weight = weight;

    await exercise.save();
    res.json(exercise);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ error: 'Exercise not found' });
    }

    await exercise.remove();
    res.json({ message: 'Exercise deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getAllExercises, getExerciseById, createExercise, updateExercise, deleteExercise };
