import { configureStore } from "@reduxjs/toolkit";
import basket from "./basket";

export const store = configureStore({
  reducer: basket
});
