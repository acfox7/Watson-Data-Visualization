const app = require('./app');
const port = process.env.PORT || 3000;
//require/add in database seed stuff here

//turn into init function that will seed and sync database on start-up once at that stage

app.listen(port, function () {
  console.log('Server listening on port: ', port);
});
