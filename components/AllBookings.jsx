import React from 'react';
import { useCart } from './CartContext';
import Footer from './Footer';
import ANavBar from './ANavBar';
import { Card, CardContent, Typography} from '@mui/material';
import '../assets/css/AllBookings.css'; // Add this CSS file for styling

const AllBookings = () => {
  const { bookedEvents, removeEventFromCart } = useCart();

  const handleDelete = (index) => {
    removeEventFromCart(index);
  };

  return (
    <div>
      <ANavBar />
      <div className="all-bookings-large-container">
      <div className="all-bookings-container">
        <h1>Booked Events ({bookedEvents.length})</h1>
        <div className="all-bookings-content">
          {bookedEvents.length === 0 ? (
            <Typography variant="h6">No events booked yet.</Typography>
          ) : (
            bookedEvents.map((event, index) => (
              <Card key={index} className="all-bookings-card">
                <CardContent>
                  <Typography variant="h4">{event.name}</Typography>
                  <Typography variant="body1"><strong>Duration:</strong> {event.duration}</Typography>
                  <Typography variant="body1"><strong>Number of Guests:</strong> {event.guests}</Typography>
                  <Typography variant="body1"><strong>Date:</strong> {event.date}</Typography>
                  <Typography variant="body1"><strong>Venue:</strong> {event.venue}</Typography>
                  <Typography variant="body1"><strong>Cuisine:</strong> {event.cuisine}</Typography>
                  <Typography variant="body1"><strong>Payment Status:</strong> {event.paymentStatus ? 'Successful' : 'In Progress'}</Typography>
                  <button className="all-bookings-btn" onClick={()=>{handleDelete(index)}}>Delete</button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
      <Footer />
      </div>
    </div>
  );
};

export default AllBookings;
