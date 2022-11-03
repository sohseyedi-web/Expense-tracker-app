import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./reducers/reducer";

const Store = configureStore({
  reducer: {
    expense: expenseSlice,
  },
});

export default Store;
