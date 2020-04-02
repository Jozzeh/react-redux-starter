// combined reducer

//EXAMPLE
// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import MenuReducer from "./menuReducer";
import CountReducer from "./countReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  MenuReducer: MenuReducer,
  CountReducer: CountReducer
});
// Exports
export default rootReducer;
