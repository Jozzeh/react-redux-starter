// combined reducer

//EXAMPLE
// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import MenuReducer from './menuReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  MenuReducer: MenuReducer,
});
// Exports
export default rootReducer;