import {types} from '../reducers/chuckReducer';
import {createAsyncAction} from '../../helpers/middlewares/redux-async';
import chuckClient from '../../clients/chuckClient';

const chuckActions = {
  getRandomQuote: () => {
    return createAsyncAction({
      asyncRequest: chuckClient.getRandomQuote.bind(null),
      requestPayload: {},
      requestType: types.UPDATE_RANDOM_LOADING,
      successType: types.UPDATE_RANDOM_SUCCESS,
      failureType: types.UPDATE_RANDOM_FAILURE,
    })
  },
  getSpecificQuote: (firstname, lastname) => {
    return createAsyncAction({
      asyncRequest: chuckClient.getSpecificQuote.bind(null, firstname, lastname),
      requestPayload: {firstname: firstname, lastname: lastname},
      requestType: types.UPDATE_RANDOM_LOADING,
      successType: types.UPDATE_RANDOM_SUCCESS,
      failureType: types.UPDATE_RANDOM_FAILURE,
    })
  },
};

export default chuckActions;