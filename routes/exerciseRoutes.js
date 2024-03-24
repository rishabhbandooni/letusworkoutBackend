// backend/routes/exerciseRoutes.js
const express = require('express');
const router = express.Router();
const { getAllExercises, getExerciseById, createExercise, updateExercise, deleteExercise } = require('../controllers/exerciseController');

router.get('/', getAllExercises);
router.get('/:id', getExerciseById);
router.post('/', createExercise);
router.put('/:id', updateExercise);
router.delete('/:id', deleteExercise);

module.exports = router;
