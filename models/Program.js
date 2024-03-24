// models/Program.js
const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }],
  // Add other fields as needed, such as description, duration, goal, etc.
});

module.exports = mongoose.model('Program', programSchema);
