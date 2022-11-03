import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  transactions: [],
  getTotalAmount: 0,
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = {
        id: uuidv4(),
        data: action.payload,
        createdAt: new Date().toISOString(),
      };
      const addNewItem = [...state.transactions, newItem];
      return { ...state, transactions: addNewItem, category: addNewItem };
    },
    removeItem(state, action) {
      const removeTran = [...state.transactions];
      const filterItem = removeTran.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, transactions: filterItem };
    },
    getTotal(state, action) {},
  },
});

export const { addItem, removeItem } = expenseSlice.actions;
export default expenseSlice.reducer;
