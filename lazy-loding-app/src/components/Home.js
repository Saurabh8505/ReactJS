import React, { useState, Suspense } from "react";
import { useTheme } from "../context/ThemeContext";
import "./Home.css";

const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className={`home-container ${theme}`}>
      <h1>Welcome to the {theme} theme!</h1>
      <button className="btn btn-primary" onClick={toggleTheme}>
        Toggle Theme
      </button>

      <div className="button-container">
        <button className="btn btn-secondary" onClick={() => setShowAbout(!showAbout)}>
          {showAbout ? "Hide About" : "Show About"}
        </button>
        <button className="btn btn-secondary" onClick={() => setShowContact(!showContact)}>
          {showContact ? "Hide Contact" : "Show Contact"}
        </button>
      </div>

      {showAbout && (
        <Suspense fallback={<div>Loading about section...</div>}>
          <About />
        </Suspense>
      )}

      {showContact && (
        <Suspense fallback={<div>Loading contact section...</div>}>
          <Contact />
        </Suspense>
      )}
    </div>
  );
};

export default Home;