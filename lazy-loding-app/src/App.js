import React, { Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./components/Home";
import "./App.css";
const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;