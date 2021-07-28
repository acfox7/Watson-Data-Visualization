const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const path = require('path');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '..', '..', '.env'),
});
const WATSON_KEY = process.env.WATSON_KEY;
const WATSON_ACCESS_URL = process.env.WATSON_ACCESS_URL;

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2021-03-25',
  authenticator: new IamAuthenticator({
    apikey: WATSON_KEY,
  }),
  serviceUrl: WATSON_ACCESS_URL,
});

const analyzeParams = {
  features: {
    entities: {
      emotion: true,
      sentiment: true,
      limit: 6,
    },
    emotion: {},
  },
  text: 'Here I am providing you some sample text. This is just to make sure everything is working as intended. For more info, Michael is my boyfriend.',
};

async function WatsonCall(analyzeParams) {
  try {
    const results = await naturalLanguageUnderstanding.analyze(analyzeParams);
    console.log('Results: ', results.result);
    console.log('Emotion: ', results.result.emotion);
  } catch (error) {
    console.log(error);
  }
}

WatsonCall(analyzeParams);
