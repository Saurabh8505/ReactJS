import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import RetailPage from './components/RetailPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/retail" element={<RetailPage />} />
      <Route path="/" element={<LoginForm />} /> {/* Default to login page */}
    </Routes>
  </Router>
);

export default App;