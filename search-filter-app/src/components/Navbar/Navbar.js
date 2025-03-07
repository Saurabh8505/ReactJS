import React from "react";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My React App</h1>
      <ThemeToggleButton />
    </nav>
  );
};

export default Navbar;