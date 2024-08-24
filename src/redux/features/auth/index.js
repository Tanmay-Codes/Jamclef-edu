import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5004",
});

// // Async thunk for sign in
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signin", credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

// // Async thunk for sign up
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signup", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

// // Async thunk for refreshing token
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/refreshToken", { token });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    signOut: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("access_token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        localStorage.setItem("access_token", action.payload.accessToken);
        localStorage.setItem(
          "refresh_token",
          action.payload.user.refresh_token
        );
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        localStorage.setItem("access_token", action.payload.accessToken);
        localStorage.setItem(
          "refresh_token",
          action.payload.user.refresh_token
        );
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        localStorage.setItem("access_token", action.payload.accessToken); // Update access token in localStorage
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.error = action.payload.message;
      });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
