import React from 'react';
import { useCart } from './CartContext';
import '../assets/css/Cart.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { Card, CardContent, Typography, Button } from '@mui/material';

const Cart = () => {
  const { bookedEvents, removeEventFromCart } = useCart();

  const handleDelete = (index) => {
    removeEventFromCart(index);
  };

  return (
    <div>
      <NavBar />
      <div className="cart-container">
        <div className="cart-heading">
          <h1>Your Booked Events ({bookedEvents.length})</h1>
        </div>
        <div className="cart-content">
          {bookedEvents.length === 0 ? (
            <Typography variant="h6">No events booked yet.</Typography>
          ) : (
            bookedEvents.map((event, index) => (
              <Card key={index} className="cart-card">
                <CardContent>
                  <Typography variant="h4">{event.name}</Typography>
                  <Typography variant="body1"><strong>Duration:</strong> {event.duration}</Typography>
                  <Typography variant="body1"><strong>Number of Guests:</strong> {event.guests}</Typography>
                  <Typography variant="body1"><strong>Date:</strong> {event.date}</Typography>
                  <Typography variant="body1"><strong>Venue:</strong> {event.venue}</Typography>
                  <Typography variant="body1"><strong>Cuisine:</strong> {event.cuisine}</Typography>
                  <Typography variant="body1"><strong>Payment Status:</strong> {event.paymentStatus ? 'Successful' : 'In Progress'}</Typography>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(index)}>Delete</Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
