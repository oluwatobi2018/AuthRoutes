require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');  // connects to MongoDB
const authRoutes = require('./routes/auth.routes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Basic root route
app.get('/', (req, res) => {
  res.send('Welcome to Auth API');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
