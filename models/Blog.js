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
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Set the default value to the current date and time
    allowNull: false,
  },
});

module.exports = Blog;
