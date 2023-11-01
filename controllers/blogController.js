const Blog = require('../models/Blog');

// Create a new blog post
const createBlogPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Create a new blog post using the Blog model
    const newBlogPost = await Blog.create({
      title,
      content,
      // Add userId to associate the blog post with the logged-in user
      userId: req.user.id,
    });

    res.status(201).json(newBlogPost);
  } catch (error) {
    res.status(400).json({ error: 'Blog post creation failed' });
  }
};

// Retrieve all blog posts
const getAllBlogPosts = async (req, res) => {
  try {
    // Retrieve all blog posts from the database
    const blogPosts = await Blog.findAll();

    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve blog posts' });
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
};
