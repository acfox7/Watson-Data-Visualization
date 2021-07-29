import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import books from './books';
import book from './singleBook';
import watsonData from './watsonData';

const reducer = combineReducers({ books, book, watsonData });
const middleware = composeWithDevTools(
  applyMiddleware(ThunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
