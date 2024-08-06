import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for the cart
export const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider = ({ children }) => {
  const [bookedEvents, setBookedEvents] = useState(() => {
    // Retrieve booked events from localStorage or default to an empty array
    const savedEvents = localStorage.getItem('bookedEvents');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [eventCuisine, setEventCuisine] = useState('');
  const [eventVenue, setEventVenue] = useState('');

  useEffect(() => {
    // Save booked events to localStorage whenever it changes
    localStorage.setItem('bookedEvents', JSON.stringify(bookedEvents));
  }, [bookedEvents]);

  const addEventToCart = (event) => {
    setBookedEvents((prevEvents) => [...prevEvents, event]);
  };

  const updatePaymentStatus = (eventId, status) => {
    setBookedEvents((prevEvents) =>
      prevEvents.map((event, index) =>
        index === eventId ? { ...event, paymentStatus: status } : event
      )
    );
  };

  const removeEventFromCart = (index) => {
    setBookedEvents((prevEvents) => prevEvents.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ bookedEvents, addEventToCart, updatePaymentStatus, removeEventFromCart, eventVenue, setEventVenue, eventCuisine, setEventCuisine }}>
      {children}
    </CartContext.Provider>
  );
};
