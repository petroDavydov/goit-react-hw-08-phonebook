import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authActions from "./authAction";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const fetchRegister = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const fetchLogin = (userData) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/users/login", userData)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch((error) => {
      dispatch(authActions.loginError(error.message));
      toast.info(error.message);
    });
};

export const fetchLogout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      token.unset();
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistToken = state.auth.token;
    if (!persistToken) {
      return rejectWithValue({ message: `error with token` });
    }
    token.set(persistToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
