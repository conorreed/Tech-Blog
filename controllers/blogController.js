const Blog = require('../models/Blog');


const createBlogPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newBlogPost = await Blog.create({
      title,
      content,

      userId: req.user.id,
    });

    res.status(201).json(newBlogPost);
  } catch (error) {
    res.status(400).json({ error: 'Blog post creation failed' });
  }
};


const getAllBlogPosts = async (req, res) => {
  try {

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
