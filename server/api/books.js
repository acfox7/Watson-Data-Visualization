const router = require('express').Router();
const { Book } = require('../db');

//ADD ROUTES HERE
// router.get('books/1', async (req, res, next) => {
//   //
// });

router.get('/', async (req, res, next) => {
  try {
    const books = await Book.findAll({
      attributes: ['id', 'title', 'author', 'excerptTitle', 'imageURL'],
    });
    res.json(books);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
