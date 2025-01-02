import { createSlice } from "@reduxjs/toolkit";
const popularBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    category: "Science Fiction",
  },
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
  },
  {
    id: 4,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    category: "Mystery",
  },
];

const initialState = {
  popularBooks: popularBooks,
  myBooks: [],
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
