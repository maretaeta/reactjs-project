/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import auth from "../reducers/authReduce";
import user from "../reducers/userReduce";
import menuReduce from "./menuReduce";

export default combineReducers({
  user,
  auth,
  menuReduce,
});
