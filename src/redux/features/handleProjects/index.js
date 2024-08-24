import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// Async thunk for sign in
export const createProject = createAsyncThunk(
  "project/create",
  async (projectData, { rejectWithValue }) => {
    try {
      console.log("projectData : ", projectData);
      //   const response = await axios.post(
      //     "http://localhost:5004/auth/signin",
      //     credentials
      //   );
      //   return response.data; // Assuming the backend returns a user object with a token
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

// Async thunk for sign up
export const deleteProject = createAsyncThunk(
  "project/delete",
  async (projectData, { rejectWithValue }) => {
    try {
      console.log("project Data : ", projectData);
      //   const response = await axios.post(
      //     "http://localhost:5004/auth/signup",
      //     projectData
      //   );
      //   return response.data; // Assuming the backend returns a user object with a token
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "handleProjects",
  initialState: {
    projectData: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projectData = action.payload;
      })
      .addCase(createProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProject.fulfilled, (state) => {
        state.loading = false;
        state.projectData = null;
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
