import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/ForgotPassword.css';
import NavBar from './NavBar';
import Footer from './Footer';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }

    // Simulate sending email
    setTimeout(() => {
      setMessage('Email sent successfully!');
    }, 1000);
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
    <NavBar/>
      <div className="forgot-password-container">
      <div className="forgot-password">
        <form onSubmit={handleSubmit}>
          <h1>Forgot Password</h1>
          <div className="input-text1">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555L8 8.414l7.95-4.86A1.993 1.993 0 0 0 13.333 3H2.667a1.993 1.993 0 0 0-2.617.555zM16 4.697v7.104l-5.803-3.522L16 4.697zM0 11.8V4.697l5.803 3.582L0 11.8z"/>
            </svg>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {message && <p style={{ color: 'green' }}>{message}</p>}
          <button type="submit">Submit</button>
          <button type="button" onClick={handleBackToLogin} className="back-to-login">Back to Login</button>
        </form>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default ForgotPassword;
