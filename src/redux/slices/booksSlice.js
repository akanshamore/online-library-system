import { createSlice } from "@reduxjs/toolkit";
import { books } from "../../utils/constants";

const initialState = {
  myBooks: books,
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
