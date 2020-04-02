import produce from 'immer';

// Initial State
export const initialState = {
  menu: {
    active: 'home'
  }
};
// Reducers (Modifies The State And Returns A New State)
const MenuReducer = (previousState = initialState, action) => {
  return produce(previousState, newState => {
    switch (action.type) {
      // Start test
      case 'SET_ACTIVE_MENU': {
        newState.menu.active = action.active;
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
export default MenuReducer;
