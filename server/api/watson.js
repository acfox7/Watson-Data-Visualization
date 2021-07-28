const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const path = require('path');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '..', '..', '.env'),
});
const WATSON_KEY = process.env.WATSON_KEY;
const WATSON_ACCESS_URL = process.env.WATSON_ACCESS_URL;
const { Book } = require('../db');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2021-03-25',
  authenticator: new IamAuthenticator({
    apikey: WATSON_KEY,
  }),
  serviceUrl: WATSON_ACCESS_URL,
});

async function WatsonCall(analyzeParams) {
  try {
    const results = await naturalLanguageUnderstanding.analyze(analyzeParams);
    console.log('Results: ', results.result);
    console.log('Emotion: ', results.result.emotion);
  } catch (error) {
    console.log(error);
  }
}

async function getExcerptForTest(bookId) {
  try {
    const book = await Book.findByPk(bookId);
    //console.log('Excerpt: ', book.excerpt);
    let condensedExcerpt = book.excerpt.replace(/[\r\n\t]/g, ' ');
    //console.log(typeof condensedExcerpt);
    return condensedExcerpt;
  } catch (error) {
    console.log(error);
  }
}

getExcerptForTest(1).then((value) => {
  const analyzeParams = {
    features: {
      entities: {
        emotion: true,
        sentiment: true,
        limit: 6,
      },
      emotion: {},
    },
    text: value,
  };

  WatsonCall(analyzeParams);
});
//let hpExcerpt = getExcerptForTest(1);
//console.log(hpExcerpt());
