import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeToggleButton.css";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-toggle-button ${theme}`}
      onClick={toggleTheme}
    >
      Toggle Theme ({theme})
    </button>
  );
};

export default ThemeToggleButton;