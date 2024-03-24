// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signup, login, logout, getCurrentUser } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', getCurrentUser);

module.exports = router;
