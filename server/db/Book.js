const Sequelize = require('sequelize');
const db = require('./db');

const Book = db.define('book', {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  excerptTitle: Sequelize.STRING,
  excerpt: Sequelize.TEXT,
  sourceURL: Sequelize.TEXT,
  imageURL: Sequelize.TEXT,
});

module.exports = Book;
