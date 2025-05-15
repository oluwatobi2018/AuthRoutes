const express = require('express');
const router = express.Router();
const {
  signup,
  signin,
  resetPassword,
} = require('../controllers/auth.controller');

// @route   POST /api/auth/signup
// @desc    Register new user
router.post('/signup', signup);

// @route   POST /api/auth/signin
// @desc    Login user and return JWT
router.post('/signin', signin);

// @route   POST /api/auth/reset-password
// @desc    Reset user password
router.post('/reset-password', resetPassword);

module.exports = router;
