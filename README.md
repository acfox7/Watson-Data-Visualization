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

Maybe look into if have time: - launching this app somehow - docker, Kubernetes, etc.

Next Steps:

- Build out React Routes and Various Components

- think through how I want to handle novel data and Watson data
  - believe I will need to make Watson calls from my server rather than the frontend since I will need my API keys and such
    - use dotenv package
