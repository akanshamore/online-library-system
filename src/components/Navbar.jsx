import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="nav-logo">
          📚 Online Library
        </Link>
      </div>
      <div>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/browse" className="nav-link">
          Browse Books
        </Link>
        <Link to="/add-book" className="nav-link">
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
