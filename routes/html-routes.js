const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the homepage (index.html)
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Serve the login page
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

// Serve the dashboard page
router.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});

// Add more routes for serving other HTML pages (e.g., blog post page)

module.exports = router;
