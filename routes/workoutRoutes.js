// backend/routes/workoutRoutes.js
const express = require('express');
const router = express.Router();
const { getAllWorkouts, getWorkoutById, createWorkout, updateWorkout, deleteWorkout } = require('../controllers/workoutController');

router.get('/', getAllWorkouts);
router.get('/:id', getWorkoutById);
router.post('/', createWorkout);
router.put('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

module.exports = router;
