import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import productReducers from "./productReducers";

export const rootReducer = combineReducers({
  products: productReducers,
  filters: filterReducer,
});
