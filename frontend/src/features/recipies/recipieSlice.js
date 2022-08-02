import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/index";

const initialState = {
  recipies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Add a new recipie

export const addRecipie = createAsyncThunk(
  "recipie/add",
  async (data, thunkAPI) => {
    try {
      return await api.addRecipie(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const goalSlice = createSlice({
  name: "recipies",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addRecipie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRecipie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals.push(action.payload);
      })
      .addCase(addRecipie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = recipieSlice.actions;
export default recipieSlice.reducer;
