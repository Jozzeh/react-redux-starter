const countActions = {
  incrementCounter: () => {
    return dispatch => {
      dispatch({
        type: 'INCREMENT_COUNTER',
      });
    };
  },
  decrementCounter: () => {
    return dispatch => {
      dispatch({
        type: 'DECREMENT_COUNTER',
      });
    };
  },
};

export default countActions;