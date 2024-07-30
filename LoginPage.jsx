import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import '../assets/css/Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Both fields are required');
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/users', {
        params: { username, password }
      });

      const user = response.data.find(user => user.username === username && user.password === password);

      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        setSnackbarOpen(true);
        setError('');
        setTimeout(() => {
          if (user.role === 'Admin') {
            navigate('/AHomePage');
          } else {
            navigate('/homepage');
          }
        }, 2000); // Redirect after 2 seconds
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Error occurred during login');
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <NavBar />
      <section>
        <div className="container">
          <div className="login">
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>
              <div className="input-text">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </div>
              <div className="input-text">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                </svg>
              </div>
              <div style={{ paddingBottom: '15px' }}>{error && <p style={{ color: 'red' }}>{error}</p>}</div>
              <div className="remember-me">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="/forgotPassword">Forgot Password</Link>
              </div>
              <button type="submit">Log in</button>
              <div className="register-link">New to Dew? <Link to="/register">Register</Link></div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ backgroundColor: 'black', color: 'white' }}>
          Login successful!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoginPage;
