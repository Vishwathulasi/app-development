import React, { useEffect, useState } from 'react';
import ANavBar from './ANavBar';
import Footer from './Footer';
import { Card, CardContent, Typography } from '@mui/material';
import '../assets/css/ManageUser.css'; // Assuming you have CSS for styling

const ManageUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <ANavBar />
      <div className="manage-user-container">
        <div className="manage-user-heading">
          <h1>User Details</h1>
        </div>
        <div className="manage-user-cards">
          {users.map((user) => (
            <Card key={user.id} className="user-card">
              <CardContent>
                <Typography variant="h6" component="div">
                  {user.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mobile Number: {user.mobileNumber}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManageUser;
