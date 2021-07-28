const app = require('./app');
const port = process.env.PORT || 3000;
const seed = require('../seed');
const { db } = require('./db');

//turn into init function that will seed and sync database on start-up once at that stage

const init = async () => {
  try {
    if (process.env.SEED === 'true') {
      await seed();
    } else {
      await db.sync();
    }
    app.listen(port, function () {
      console.log('Server listening on port: ', port);
    });
  } catch (error) {
    console.log(error);
  }
};

init();

// app.listen(port, function () {
//   console.log('Server listening on port: ', port);
// });
