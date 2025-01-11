import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        Home
      </NavLink>
      <NavLink to="/browse" className="nav-logo">
        Browse Books
      </NavLink>
      <NavLink to="/add-book" className="nav-logo">
        Add Book
      </NavLink>
    </nav>
  );
};
