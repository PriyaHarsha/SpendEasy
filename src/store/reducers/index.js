import { combineReducers } from "redux";
import expenseReducer from "./expenseReducer";
import creditReducer from "./creditReducer";
import limitReducer from "./limitReducer";

export default combineReducers({
  expense: expenseReducer,
  credit: creditReducer,
  limit: limitReducer,
});
