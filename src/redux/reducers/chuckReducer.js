import produce from 'immer';

// Initial State
export const initialState = {
  quotes: {
    standard: '',
    specific: ''
  }
};

export const types = {
  UPDATE_RANDOM_LOADING: 'chuck::random_quote::loading',
  UPDATE_RANDOM_SUCCESS: 'chuck::random_quote::success',
  UPDATE_RANDOM_FAILURE: 'chuck::random_quote::failure',

  UPDATE_SPECIFIC_LOADING: 'chuck::specific_quote::loading',
  UPDATE_SPECIFIC_SUCCESS: 'chuck::specific_quote::success',
  UPDATE_SPECIFIC_FAILURE: 'chuck::specific_quote::failure',
}

// Reducers (Modifies The State And Returns A New State)
const ChuckReducer = (previousState = initialState, action) => {
  return produce(previousState, newState => {
    console.log(action);
    switch (action.type) {
      // Load random
      case types.UPDATE_RANDOM_LOADING: {
        newState.quotes.standard = "LOADING ...";
        return newState;
      }
      // Failed random
      case types.UPDATE_RANDOM_FAILURE: {
        newState.quotes.standard = "Failed loading a random Chuck quote ...";
        return newState;
      }
      // Success random
      case types.UPDATE_RANDOM_SUCCESS: {
        newState.quotes.standard = action.payload.data.value.joke;
        return newState;
      }

      // Load specific
      case types.UPDATE_SPECIFIC_LOADING: {
        newState.quotes.specific = "LOADING ...";
        return newState;
      }
      // Failed specific
      case types.UPDATE_SPECIFIC_FAILURE: {
        newState.quotes.specific = "Failed loading a quote with your name ...";
        return newState;
      }
      // Success specific
      case types.UPDATE_SPECIFIC_SUCCESS: {
        newState.quotes.specific = action.payload.data.value.joke;
        return newState;
      }

      // Default
      default: {
        return previousState;
      }
    }
  });
  
};
// Exports
export default ChuckReducer;
