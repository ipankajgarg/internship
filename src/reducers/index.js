import { combineReducers } from "redux";
import Cards from "./cardReducer";
import Logged from "./loggedReducer";
const rootReducer = combineReducers({
  Cards,
  Logged
});

export default rootReducer;
