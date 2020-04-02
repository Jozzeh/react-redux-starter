// this file holds the logic to dispatch the action before, during and after a call has been initialised.

// EXAMPLE
export const createAction = 
  (beforeType, successType, errorType, fn) => (...args) => (dispatch) => {
    dispatch({ type: beforeType, payload: args })
    return Promise.resolve(fn(...args))
      .then(payload => dispatch({ type: successType, payload }))
      .catch(payload => dispatch({ type: errorType, payload }));
      
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