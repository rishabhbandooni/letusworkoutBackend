// models/Workout.js
const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  exercises: [
    {
      exerciseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', required: true },
      sets: [{ reps: Number, weight: Number }],
    },
  ],
  // Add other fields as needed, such as notes, duration, etc.
});

module.exports = mongoose.model('Workout', workoutSchema);
