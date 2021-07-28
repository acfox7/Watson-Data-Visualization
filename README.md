NEED:

- React Front End w/ Main Page
  - list book options that can be clicked to go to page specifically about that book
- React single book pages
  - each page will show data on the book - title, author, selection tested
  - then will show data visualization based on Watson evaluation of the text
  - charts/graphs on each character mentioned in the excerpt, the emotions associated with each
  - graph/chart on the overall emotions/sentiment of the chapter - possibly include information on all the entites included
- Redux store that will include data on all of the stories from the DB and specific information on a particular story

- button/portion that will take you to page that will allow you to enter your own text/excerpt or URL and display graphs/charts based on Watson evaluation of same
  -this will save the text and title in the database for re-reference/look up
  -this will make another call to Watson to get the data and save same in DB or send to front-end

- DB should be seeded with base information on each story - title, author, excerpt, etc.

  - should the DB contain the information received back from Watson API call?
  - or should that data be sent to the front end without storing and be retrieved every time a page is clicked?

- should the API calls to Watson be made on the frontend or backend?

- Express server set up to serve routes to main page and particular book/novel pages

- look into chart.js and pairing same with react
  - are additional libraries needed to accomplish this?
- look into chart.js generally and using same with the data that we are going to get back from Watson

First steps: - Watson - get clearer picture of the data that I will get back, how it is organized, etc. - Chart.js - get clearer picture of how this works and how it will need the data in order to show it - Chart.js with react - make sure this will work together and there is nothing special that needs to happen / what would need to happen - Determine exactly how I want to handle the Watson data - save it into DB or make new calls everytime to get the data

Maybe look into if have time: - launching this app somehow - docker, Kubernetes, etc.

TOMORROW: build react front end and just try to render any graphical data that I make up

- can from there begin to build out more of a front-end and Watson stuff
