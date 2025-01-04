import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AddBook } from "./components/AddBook";
import { BrowseBooks } from "./components/BrowseBooks";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/browse" element={<BrowseBooks />} />
        {/* <Route path="/books" element={<BrowseBooks />} /> */}
        <Route path="/browse/:path" element={<BrowseBooks />} />
        {/* <Route path="/book/:id" element={<BookDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
