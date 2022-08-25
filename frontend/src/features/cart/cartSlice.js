import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalNumItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      console.log("state is...", state.items, "payload is: ", payload);
      const { _id } = payload;
      const find = state.items.find((item) => item._id === _id);
      if (find) {
        state.items = state.items.map((item) =>
          item._id === _id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        console.log("didn't find anything", state.items);
        state.items.push({
          ...payload,
          quantity: 1,
        });
        console.log("new item added to cart", state.items.length);
      }
    },
    increment(state, { payload }) {
      state.items = state.items.map((item) =>
        item._id === payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    },
    decrement(state, { payload }) {
      state.items = state.items.map((item) =>
        item._id === payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
    },
    getCartTotal: (state) => {
      let { totalNumItems, totalPrice } = state.items.reduce(
        (total, item) => {
          const { price, quantity } = item;
          const subTotal = price * quantity;
          total.totalPrice += subTotal;
          total.totalNumItems += quantity;
          return total;
        },
        { totalNumItems: 0, totalPrice: 0 }
      );
      state.totalPrice = totalPrice;
      state.totalNumItems = totalNumItems;
    },
    clear(state) {
      return initialState;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, increment, decrement, getCartTotal, clear } =
  cartSlice.actions;

// addToCart(state, { payload }) {
//   console.log("state is...", state.items, "payload is: ", payload);
//   const { _id } = payload;
//   const find = state.items.find((item) => item._id === _id);
//   if (find) {
//     return state.items.map((item) =>
//       item._id === _id
//         ? {
//             ...item,
//             quantity: item.quantity + 1,
//           }
//         : item
//     );
//   } else {
//     state.items.push({
//       ...payload,
//       quantity: 1,
//     });
//   }
// },
