import produce from 'immer';

// Initial State
export const initialState = {
  count: 1
};
// Reducers (Modifies The State And Returns A New State)
const CountReducer = (previousState = initialState, action) => {
  return produce(previousState, newState => {
    switch (action.type) {
      case 'INCREMENT_COUNTER': {
        newState.count = previousState.count++;
        return newState;
      }
      case 'DECREMENT_COUNTER': {
        newState.count = previousState.count--;
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
export default CountReducer;
