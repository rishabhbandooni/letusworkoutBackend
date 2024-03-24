// models/Exercise.js
const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // E.g., Strength, Cardio, Flexibility, etc.
  // Add other fields as needed, such as description, muscle group, equipment needed, etc.
});

module.exports = mongoose.model('Exercise', exerciseSchema);
