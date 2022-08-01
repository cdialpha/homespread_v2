import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./features/recipies/recipieSlice";

export const store = configureStore({
  reducer: {
    goals: goalReducer,
  },
});
