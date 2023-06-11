import { combineReducers } from "redux";
import postsReducers from "./postsReducers";
import loginReducers from "./loginReducers";
import appReducer from "./appReducer";

export const rootReducer = combineReducers({
  user: loginReducers,
  posts: postsReducers,
  app: appReducer,
});
