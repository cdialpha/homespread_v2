import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import reduxLogger from "redux-logger";

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
