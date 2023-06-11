import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/index";
import Thunk from "redux-thunk";
import Logger from "../middleware/Logger";

export function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      const defaultMiddleware = getDefaultMiddleware({serializableCheck: false});
      return defaultMiddleware.concat([Thunk, Logger]);
    },
  });

  return store;
}
