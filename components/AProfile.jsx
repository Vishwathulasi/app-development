import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import ANavBar from './ANavBar';
import { Snackbar, Alert, TextField } from '@mui/material';
import '../assets/css/AProfile.css';

const AProfile = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    mobileNumber: '',
    email: ''
  });
  const [editing, setEditing] = useState(false);
  const [newDetails, setNewDetails] = useState(userDetails);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    // Fetch user details from local storage or API
    const user = JSON.parse(localStorage.getItem('loggedInUser')) || {};
    console.log('Fetched user details:', user); // Debugging line
    setUserDetails(user);
    setNewDetails(user);
  }, []);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setNewDetails(userDetails);
  };

  const handleSave = () => {
    setUserDetails(newDetails);
    setEditing(false);
    setSnackbarMessage('Details updated successfully!');
    setSnackbarOpen(true);
    // Update the user details in local storage or API
    localStorage.setItem('loggedInUser', JSON.stringify(newDetails));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  console.log('Current userDetails:', userDetails); // Debugging line

  return (
    <div>
      <ANavBar />
      <div className="large-container">
        <div className="profile-admin-container">
          <div className="profile-admin-details">
            <h1>Admin Profile</h1>
            {editing ? (
              <div className="profile-admin-edit-form">
                <TextField
                  label="Name"
                  name="username" // Changed to match state property
                  value={newDetails.username}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  label="Mobile Number"
                  name="mobileNumber" // Matches state property
                  value={newDetails.mobileNumber}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  label="Email"
                  name="email" // Matches state property
                  value={newDetails.email}
                  onChange={handleChange}
                  fullWidth
                />
                <div className="profile-admin-buttons">
                  <button className="profile-admin-btn" onClick={handleSave}>
                      Save
                  </button>
                  <button className="profile-admin-btn" onClick={handleCancel}>
                      Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="profile-admin-view">
                <p><strong>Name:</strong> {userDetails.username || 'N/A'}</p>
                <p><strong>Mobile Number:</strong> {userDetails.mobileNumber || 'N/A'}</p>
                <p><strong>Email:</strong> {userDetails.email || 'N/A'}</p>
                <button className='profile-admin-btn' onClick={handleEditClick}>Edit</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ backgroundColor: 'black', color: 'white' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AProfile;
