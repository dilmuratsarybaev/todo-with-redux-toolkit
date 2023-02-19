import { createSlice } from "@reduxjs/toolkit";

export const authActionTypes = {
  LOG_OUT: "LOG_OUT",
  LOG_IN: "LOG_IN",
};

const initialState = {
  email: "",
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.email = action.payload;
      state.isAuthorized = true;
    },
    logOut(state) {
      state = initialState;
    },
  },
});

export const authActions = authSlice.actions;


