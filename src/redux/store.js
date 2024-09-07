/** @format */

import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers/index";

const isDevelopment = true;

export default configureStore({
  reducer: rootReducers,
  devTools: isDevelopment,
});
