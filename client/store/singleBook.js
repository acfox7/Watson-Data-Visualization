import axios from 'axios';

const GET_SINGLE_BOOK = 'GET_SINGLE_BOOK';

export const haveSingleBook = (book) => {
  return {
    type: GET_SINGLE_BOOK,
    book,
  };
};

export const fetchBook = (bookId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/books/${bookId}`);
      dispatch(haveSingleBook(data));
    } catch (error) {
      console.log('Error getting book from server: ', error);
    }
  };
};

export default function singleBookReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_BOOK:
      return action.book;
    default:
      return state;
  }
}
