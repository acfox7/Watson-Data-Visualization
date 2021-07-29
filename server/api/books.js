const router = require('express').Router();
const { Book } = require('../db');
const { WatsonCall, getExcerptForCall } = require('./watson');

//ADD ROUTES HERE
// router.get('books/1', async (req, res, next) => {
//   //
// });

router.get('/:id/watsonData', async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const bookExcerpt = await getExcerptForCall(bookId);
    const watsonData = await WatsonCall({
      features: {
        entities: {
          emotion: true,
          sentiment: true,
          limit: 6,
        },
        emotion: {},
      },
      text: bookExcerpt,
    });
    res.json(watsonData.result);
  } catch (error) {
    next(error);
  }
});

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
