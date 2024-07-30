import React from 'react';
import { useCart } from './CartContext';
import '../assets/css/Cart.css';
import NavBar from './NavBar';
import Footer from './Footer';

const Cart = () => {
  const { bookedEvents } = useCart();

  return (
    <div>
    <NavBar/>
    <div className="cart-container">
      <h1>Booked Events</h1>
      <div className="cart-items">
        {bookedEvents.map((event, index) => (
          <div key={index} className="cart-item">
            <h2>{event.name}</h2>
            <p>Duration: {event.duration}</p>
            <p>Number of Guests: {event.guests}</p>
            <p>Date: {event.date}</p>
            <p>Venue: {event.venue}</p>
            <p>Cuisine: {event.cuisine}</p>
            <p>Payment Status: {event.paymentStatus ? 'Successful' : 'In Progress'}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Cart;
