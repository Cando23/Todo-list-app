import { combineReducers, createStore } from "redux";
import { tasksReducer } from "./reducers/tasksReducer";
import { authenticationReducer } from "./reducers/authenticationReducer";
const rootReducer = combineReducers({
  auth: authenticationReducer,
  tasks: tasksReducer,
});
export const store = createStore(rootReducer);
