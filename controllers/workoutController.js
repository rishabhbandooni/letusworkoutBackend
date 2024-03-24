// backend/controllers/workoutController.js
const Workout = require('../models/Workout');

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id }).populate('exercises', '-_id name reps sets');
    res.json(workouts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id).populate('exercises', '-_id name reps sets');
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }

    res.json(workout);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const createWorkout = async (req, res) => {
  const { date, exercises, notes } = req.body;

  try {
    const newWorkout = new Workout({ user: req.user.id, date, exercises, notes });
    await newWorkout.save();

    res.status(201).json(newWorkout);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const updateWorkout = async (req, res) => {
  const { date, exercises, notes } = req.body;

  try {
    let workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }

    workout.date = date;
    workout.exercises = exercises;
    workout.notes = notes;

    await workout.save();

    res.json(workout);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    let workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }

    await workout.remove();

    res.json({ message: 'Workout deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getAllWorkouts, getWorkoutById, createWorkout, updateWorkout, deleteWorkout };
