import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components for Navbar
const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px;
  background-color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

// Styled Page Container
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 24px;
  font-weight: bold;
`;

const Home = () => <PageContainer>🏡 Welcome to the Home Page!</PageContainer>;
const About = () => <PageContainer>📖 Learn More About Us Here.</PageContainer>;

const App = () => {
  return (
    <Router>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
