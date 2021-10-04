import axios from 'axios';

const GET_WATSON_DATA = 'GET_WATSON_DATA';
const RESET_DATA = 'REST_DATA';

export const haveWatsonData = (data) => {
  return {
    type: GET_WATSON_DATA,
    data,
  };
};

export const resetData = () => {
  return {
    type: RESET_DATA,
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

export const fetchUserTextData = (userText) => {
  return async (dispatch) => {
    try {
      console.log('USER TEXT IN THUNK: ', userText);
      const { data } = await axios.post('/api/usertext', {
        text: userText,
      });
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
    case RESET_DATA:
      return {};
    default:
      return state;
  }
}
