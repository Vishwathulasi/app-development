import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Card, CardContent, TextField,  Snackbar, Alert } from '@mui/material';
import '../assets/css/ProfilePage.css';

const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUserData) {
      setUserData(storedUserData);
      setEditedData(storedUserData);
    }
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Save edited data to local storage
    localStorage.setItem('loggedInUser', JSON.stringify(editedData));
    setUserData(editedData);
    setEditMode(false);
    setSnackbarMessage('Profile updated successfully');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <NavBar />
      <div className='profile-container'>
        <Card className='profile-card'>
          <CardContent>
            <h2>Profile</h2>
            {editMode ? (
              <>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Username"
                  name="username"
                  value={editedData.username}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  name="email"
                  type="email"
                  value={editedData.email}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Mobile Number"
                  name="mobileNumber"
                  value={editedData.mobileNumber}
                  onChange={handleChange}
                />
                <button onClick={handleSave} className='profile-btn'>
                   Save
                </button>
              </>
            ) : (
              <>
                <p><strong>Username:</strong> {userData.username}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Mobile Number:</strong> {userData.mobileNumber}</p>
                <button onClick={handleEditClick} className='profile-btn'>
                   Edit
                </button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
      <Footer />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ backgroundColor: 'black', color: 'white' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProfilePage;
