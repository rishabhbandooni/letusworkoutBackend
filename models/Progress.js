// models/Progress.js
const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  weight: { type: Number, required: true },
  // Add other fields as needed, such as body measurements, photos, etc.
});

module.exports = mongoose.model('Progress', progressSchema);
