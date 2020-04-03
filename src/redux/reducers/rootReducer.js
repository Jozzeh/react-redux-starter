// combined reducer

//EXAMPLE
// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import MenuReducer from "./menuReducer";
import CountReducer from "./countReducer";
import ChuckReducer from "./chuckReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  MenuReducer: MenuReducer,
  ChuckReducer: ChuckReducer,
  CountReducer: CountReducer
});
// Exports
export default rootReducer;
