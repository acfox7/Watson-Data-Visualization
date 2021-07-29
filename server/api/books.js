const router = require('express').Router();
const { Book } = require('../db');

//ADD ROUTES HERE
// router.get('books/1', async (req, res, next) => {
//   //
// });

router.get('/:id', async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findByPk(Number(bookId), {
      attributes: [
        'id',
        'title',
        'author',
        'excerptTitle',
        'sourceURL',
        'imageURL',
      ],
    });
    if (book === null) {
      res.sendStatus(404);
    } else {
      res.json(book);
    }
  } catch (error) {
    next(error);
  }
});

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
