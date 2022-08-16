import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
};

// isError: false,
// isSuccess: false,
// isLoading: false,
// message: "",

// export const addRecipie = createAsyncThunk(
//   "recipie/add",
//   async (data, thunkAPI) => {
//     try {
//       return await api.addRecipie(data);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart += action.payload;
    },
    removeFromCart: (state, action) => {
      state.cart -= action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(addRecipie.pending, (state) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(addRecipie.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.isSuccess = true;
  //         state.goals.push(action.payload);
  //       })
  //       .addCase(addRecipie.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.isError = true;
  //         state.message = action.payload;
  //       });
  // },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
