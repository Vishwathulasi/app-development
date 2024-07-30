import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';
import axios from 'axios';
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
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
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
        const response = await axios.get(`http://localhost:5000/users?email=${formData.email}`);
        if (response.data.length > 0) {
          setSnackbarMessage('User already registered');
          setSnackbarSeverity('error');
          setSnackbarOpen(true);
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          await axios.post('http://localhost:5000/users', formData);
          setSnackbarMessage('Registration successful!');
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
        }
      } catch (error) {
        console.error('Error during registration', error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='app'>
      <NavBar />
      <section className='main-content'>
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
                />
                <div className="error-space">
                  {errors.username && <p className="error">{errors.username}</p>}
                </div>
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder='Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="error-space">
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder='Password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="error-space">
                  {errors.password && <p className="error">{errors.password}</p>}
                </div>
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder='Confirm Password'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <div className="error-space">
                  {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder='Mobile Number'
                  name='mobileNumber'
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
                <div className="error-space">
                  {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
                </div>
              </div>
              <div className="input">
                <div className="dropdown">
                  <button
                    className="dropbtn"
                    type="button"
                    onClick={() => setFormData({ ...formData, role: 'Select Role' })}
                  >
                    {formData.role}
                  </button>
                  <div className="dropdown-content">
                    <a href="/" onClick={(e) => { e.preventDefault(); handleRoleChange('Admin'); }}>Admin</a>
                    <a href="/" onClick={(e) => { e.preventDefault(); handleRoleChange('User'); }}>User</a>
                  </div>
                </div>
                <div className="error-space"></div>
                {errors.role && <p className="error">{errors.role}</p>}
              </div>
              <div>
                <button type='submit' className='btn'>Sign Up</button>
              </div>
              <div className="register-link">Already Have account? <Link to="/login">Log in</Link></div>
            </form>
          </div>
        </div>
      </section>
      <div className="footer">
        <Footer />
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{ width: '100%', backgroundColor: snackbarSeverity === 'success' ? 'black' : 'black', color: 'white'}}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Register;
