// this file holds the logic to dispatch the action before, during and after a call has been initialised.

export function createAsyncAction({
  asyncRequest,
  requestType,
  requestPayload,
  successType,
  failureType,
}) {
  return dispatch => {
    console.log('getter 2 random quote');
    dispatch({type: requestType, payload: requestPayload});
     asyncRequest()
      .then(data => {
        dispatch({type: successType, payload: data, requestPayload})
      }).catch(error => {
        dispatch({type: failureType, payload: requestPayload});
      })
  };
};

 // SHOULD BE USED AS
 /*
import createAction from '../helpers/middlewares/redux-async';

export loadTodos = export loadTodos = createAction(
  'LOAD_TODO_START',   // before
  'LOAD_TODO_SUCCESS', // then payload = result
  'LOAD_TODO_ERROR',   // catch payload = error
  async (args) => fetch('/todos'),
  */