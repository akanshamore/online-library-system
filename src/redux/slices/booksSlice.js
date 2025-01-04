import { createSlice } from "@reduxjs/toolkit";
import { popularBooks } from "../../utils/constants";

const initialState = {
  popularBooks: popularBooks,
  myBooks: popularBooks,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.myBooks = state.myBooks.concat(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
