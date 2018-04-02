import { combineReducers } from "redux";
import Cards from "./cardReducer";
import Logged from "./loggedReducer";
import showHide from "./showHide_reducer";
const rootReducer = combineReducers({
  Cards,
  Logged,
  showHide
});

export default rootReducer;
