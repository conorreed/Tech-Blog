const User = require('../models/User');
const bcrypt = require('bcrypt');

// User registration controller
const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username is already taken
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user using the User model
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'User registration failed' });
  }
};

// User login controller
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by their username
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if the provided password matches the hashed password
    const passwordMatch = await user.validPassword(password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Here, you can generate a token or create a session

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
