// backend/controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const updateUserProfile = async (req, res) => {
  const { username, email } = req.body;

  try {
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.username = username || user.username;
    user.email = email || user.email;

    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  try {
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Incorrect current password' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getUserProfile, updateUserProfile, changePassword };
