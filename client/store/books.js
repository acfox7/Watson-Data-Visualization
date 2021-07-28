import axios from 'axios';

const GET_ALL_BOOKS = 'GET_ALL_BOOKS';

export const haveAllBooks = (books) => {
  return {
    type: GET_ALL_BOOKS,
    books,
  };
};

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/books');
      dispatch(haveAllBooks(data));
    } catch (error) {
      console.log('Error getting books from server: ', error);
    }
  };
};

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return action.books;
    default:
      return state;
  }
}
