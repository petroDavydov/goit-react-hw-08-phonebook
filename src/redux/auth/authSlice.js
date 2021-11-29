import { createSlice } from "@reduxjs/toolkit";

import {
  //   fetchRegister,
  fetchLogin,
  fetchLogout,
  fetchCurrentUser,
} from "./authOperations";

import authAction from "./authAction";

const initialState = {
  user: { name: "", email: "" },
  token: "",
  isAuth: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authAction.registerSuccess](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuth = true;
    },

    [authAction.registerError](state, { payload }) {
      state.error = payload.message;
    },

    // [fetchRegister.fulfilled](state, { payload }) {
    //   state.user = payload.user;
    //   state.token = payload.token;
    //   state.isAuth = true;
    // },
    [fetchLogin.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuth = true;
    },
    [fetchLogout.fulfilled](state, _) {
      state.user = { name: "", email: "" };
      state.token = "";
      state.isAuth = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },

    [authAction.loginSuccess]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    [authAction.loginError]: (state, action) => {
      state.error = action.payload;
    },
  },
});
export default authSlice.reducer;
