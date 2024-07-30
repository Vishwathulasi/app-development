import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Snackbar, Alert, Button, Container, Grid, TextField, Typography, Avatar } from '@mui/material';
import axios from 'axios';
import '../assets/css/HomePage.css';
import '../assets/css/ProfilePage.css';
import Footer from './Footer';
import NavBar from './NavBar';

const ProfilePage = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    role: '',
    recentActivity: [],
    eventHistory: [],
  });
  const [formData, setFormData] = useState(user);
  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from the server
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/currentUser'); // Adjust the URL as needed
        setUser(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
    fetchUserData();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile Number is invalid';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        await axios.put(`http://localhost:5000/users/${user.id}`, formData);
        setSnackbarMessage('Profile updated successfully!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } catch (error) {
        console.error('Error updating profile', error);
        setSnackbarMessage('Error updating profile');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleLogout = () => {
    // Logic for logging out
    navigate('/login');
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.delete(`http://localhost:5000/users/${user.id}`);
      navigate('/register');
    } catch (error) {
      console.error('Error deleting account', error);
      setSnackbarMessage('Error deleting account');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <div className='app'>
      <NavBar />
      <section className='main-content'>
        <Container>
          <Typography variant="h4" gutterBottom>
            Profile Page
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Avatar alt="Profile Picture" src="/path/to/profile-picture.jpg" sx={{ width: 100, height: 100 }} />
              <Button variant="contained" component="label">
                Upload
                <input type="file" hidden />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                margin="normal"
                error={!!errors.username}
                helperText={errors.username}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                margin="normal"
                error={!!errors.mobileNumber}
                helperText={errors.mobileNumber}
              />
              <TextField
                fullWidth
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                margin="normal"
                disabled
              />
            </Grid>
          </Grid>
          <Typography variant="h5" gutterBottom>
            Activity Overview
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Recent Activity</Typography>
              <ul>
                {user.recentActivity.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Event History</Typography>
              <ul>
                {user.eventHistory.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            </Grid>
          </Grid>
          <Typography variant="h5" gutterBottom>
            Custom Preferences
          </Typography>
          {/* Add custom preferences fields here */}
          <div className="button-group">
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save Changes
            </Button>
            <Button variant="contained" color="secondary" onClick={handleLogout}>
              Logout
            </Button>
            <Button variant="contained" color="error" onClick={handleDeleteAccount} style={{backgroundColor:'white', color: 'black'}}>
              Delete Account
            </Button>
          </div>
        </Container>
      </section>
      <Footer />
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
};

export default ProfilePage;
