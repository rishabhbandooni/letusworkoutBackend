// backend/routes/progressRoutes.js
const express = require('express');
const router = express.Router();
const { getWorkoutStats, getExerciseStats } = require('../controllers/progressController');

router.get('/workouts', getWorkoutStats);
router.get('/exercises', getExerciseStats);

module.exports = router;
