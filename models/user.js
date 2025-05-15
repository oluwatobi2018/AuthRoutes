const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    // Optional fields for expansion
    // name: String,
    // resetToken: String,
    // resetTokenExpiry: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
