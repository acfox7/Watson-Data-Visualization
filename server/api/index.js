const router = require('express').Router();

router.use('/books', require('./books'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});