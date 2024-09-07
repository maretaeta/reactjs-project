/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: localStorage.getItem("access_token") || null,
  isLoggedIn: !!localStorage.getItem("access_token"),
  user: null,
};

const authReduce = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        localStorage.setItem("access_token", action.payload);
      } else {
        localStorage.removeItem("access_token");
      }
      state.access_token = action.payload;
    },

    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },

    clearAuthState: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("token_type");
      state.token = null;
      state.token_type = null;
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { setToken, setIsLoggedIn, setUser, clearAuthState } =
  authReduce.actions;

export default authReduce.reducer;
