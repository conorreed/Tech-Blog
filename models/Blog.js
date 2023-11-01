const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Blog = sequelize.define('Blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // Add more fields as needed, such as 'userId' for associating blogs with users.
});

module.exports = Blog;
