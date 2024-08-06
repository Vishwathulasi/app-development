import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';
import '../assets/css/HomePage.css';
import '../assets/css/Register.css';
import Footer from './Footer';
import NavBar from './NavBar';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    role: 'Select Role',
  });

  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character';
    }
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile Number is invalid';
    }
    if (formData.role === 'Select Role') newErrors.role = 'Role is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (role) => {
    setFormData({
      ...formData,
      role,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            id: Date.now(), // Add an id to simulate a unique user
          }),
        });

        if (response.ok) {
          setSnackbarMessage('Registration successful!');
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          setSnackbarMessage('Error during registration');
          setSnackbarSeverity('error');
          setSnackbarOpen(true);
        }
      } catch (error) {
        console.error('Error during registration', error);
        setSnackbarMessage('Error during registration');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } else {
      setErrors(newErrors);
      setSnackbarMessage('Please fix the errors');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <div className='app'>
      <NavBar />
      <div className='main-content'>
        <div className="container1">
          <div className="wrapper">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  type="text"
                  placeholder="Username"
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  className={errors.username ? 'error-input' : ''}
                />
                {errors.username && <span className="error">{errors.username}</span>}
              </div>
              <div className="input">
                <input
                  type="email"
                  placeholder="Email"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error-input' : ''}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder="Password"
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error-input' : ''}
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? 'error-input' : ''}
                />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  name='mobileNumber'
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className={errors.mobileNumber ? 'error-input' : ''}
                />
                {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
              </div>
              <div className="input role-dropdown">
                <select
                  value={formData.role}
                  onChange={(e) => handleRoleChange(e.target.value)}
                  className={errors.role ? 'error-input' : ''}
                >
                  <option value="Select Role">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
                {errors.role && <span className="error">{errors.role}</span>}
              </div>
              <button type="submit">Register</button>
              <div className='reg-link'>
                Already a user? <Link to="/login">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ backgroundColor: 'black', color: 'white' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Register;
