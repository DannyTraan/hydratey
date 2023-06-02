import { combineReducers } from "redux";
import { hydrateyReducer } from "./hydratey";
// Import your reducers here

const rootReducer = combineReducers({
  // Combine your reducers here
  hydratey: hydrateyReducer,
});

export default rootReducer;
