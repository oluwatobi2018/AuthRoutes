const bcrypt = require('bcryptjs');
const User = require('./models/User');

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPass });
    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
