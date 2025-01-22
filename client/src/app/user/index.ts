import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { loginUserApi, registerUserApi } from "./api";
import { z } from "zod";
import { LoginSchema, RegisterSchema } from "../../types";

export type User = {
  username: string | null;
  email: string | null;
};

const initialState: User = {
  username: null,
  email: null,
};

// thunks!
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData: z.infer<typeof RegisterSchema>) => {
    const data = await registerUserApi(userData);
    return data;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData: z.infer<typeof LoginSchema>) => {
    const data = await loginUserApi(userData);
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.email = action.payload.user.email;
        state.username = action.payload.user.username;
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log("Failed to register user", action);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.email = action.payload.user.email;
        state.username = action.payload.user.username;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log("Failed to login user!", action);
      });
  },
});

export const getIsUserLoggedIn = (state: RootState) =>
  state.user.username !== null;

export default userSlice.reducer;
