import React from "react";
import "./App.css";
import BrowseBooks from "./components/BrowseBooks.jsx";
import Home from "./components/Home.jsx";
import NotFound from "./components/NotFound.jsx";
import { AddBook } from "./components/AddBook.jsx";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import BookDetails from "./components/BookDetails.jsx";
import { NavBar } from "./components/NavBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseBooks />} />
        <Route path="/browse/:category" element={<BrowseBooks />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
