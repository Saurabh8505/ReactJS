import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <SearchFilter />
      </div>
    </ThemeProvider>
  );
};

export default App;