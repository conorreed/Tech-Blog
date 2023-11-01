const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Define your desired port number

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from the public folder
app.use(express.static('public'));

// Import and mount HTML routes
const htmlRoutes = require('./routes/html-routes');
app.use('/', htmlRoutes); // HTML routes are accessible at the root path

// Import and mount API routes
const apiRoutes = require('./routes/api-routes');
app.use('/', apiRoutes); // You can specify a different path if needed, e.g., '/api'

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
