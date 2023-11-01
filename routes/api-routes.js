const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const userController = require('../controllers/userController');


router.post('/api/blog/create', blogController.createBlogPost);


router.get('/api/blog', blogController.getAllBlogPosts);


router.post('/api/user/register', userController.registerUser);


router.post('/api/user/login', userController.loginUser);



module.exports = router;
