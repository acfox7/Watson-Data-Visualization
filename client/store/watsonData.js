import axios from 'axios';

const GET_WATSON_DATA = 'GET_WATSON_DATA';

export const haveWatsonData = (data) => {
  return {
    type: GET_WATSON_DATA,
    data,
  };
};

export const fetchWatsonData = (bookId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/books/${bookId}/watsonData`);
      dispatch(haveWatsonData(data));
    } catch (error) {
      console.log('Error getting Watson data from server: ', error);
    }
  };
};

export default function watsonDataReducer(state = {}, action) {
  switch (action.type) {
    case GET_WATSON_DATA:
      return action.data;
    default:
      return state;
  }
}
