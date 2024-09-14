import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../API/authAPI";
import { RootState } from "../store";
import { IInitialState } from "./types/IAuthTypes";

const initialState: IInitialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isAuthenticated = true;
        }
      )
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isAuthenticated = true;
        }
      )
      .addMatcher(
        authApi.endpoints.current.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isAuthenticated = true;
        }
      );
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;


export const selectIsAuth =( state:RootState)=>state.auth.isAuthenticated

export const selectUser = (state:RootState)=>state.auth.user