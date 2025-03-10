import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RetailPage.css';

const RetailPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  const goToSignUp = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <div className="container">
      <h2 className="heading">Welcome to the Retail Website, {user?.username}!</h2>
      <button onClick={handleLogout} className="button">Logout</button>
      <button onClick={goToSignUp} className="button" style={{ marginTop: '10px', backgroundColor: '#28a745' }}>
        Go to Sign Up
      </button>
    </div>
  );
};

export default RetailPage;