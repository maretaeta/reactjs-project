/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import auth from "../reducers/authReduce";
import userSlice from "../reducers/userReduce";

export default combineReducers({
  auth,
  userSlice,
});
