const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const userController = require('../controllers/userController');

// API endpoint to create a new blog post
router.post('/api/blog/create', blogController.createBlogPost);

// API endpoint to retrieve all blog posts
router.get('/api/blog', blogController.getAllBlogPosts);

// API endpoint for user registration
router.post('/api/user/register', userController.registerUser);

// API endpoint for user login
router.post('/api/user/login', userController.loginUser);

// Add more API routes as needed for comments, user profiles, and other features

module.exports = router;
