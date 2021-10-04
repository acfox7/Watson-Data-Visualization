const router = require('express').Router();
const { WatsonCall } = require('./watson');

//ADD ROUTES HERE

router.post('/', async (req, res, next) => {
  try {
    const text = req.body.text;
    const watsonData = await WatsonCall({
      features: {
        entities: {
          emotion: true,
          sentiment: true,
          limit: 6,
        },
        emotion: {},
      },
      text: text,
    });
    res.json(watsonData.result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
