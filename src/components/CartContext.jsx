import React, { createContext, useState, useContext } from 'react';

// Create a Context for the cart
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider = ({ children }) => {
  const [bookedEvents, setBookedEvents] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState({}); // { [eventId]: 'paid' or 'pending' }

  // Function to add an event to the cart
  const addEventToCart = (event) => {
    setBookedEvents((prevEvents) => [...prevEvents, event]);
  };

  // Function to update the payment status of an event
//   const updatePaymentStatus = (eventId, status) => {
//     setPaymentStatus((prevStatus) => ({
//       ...prevStatus,
//       [eventId]: status,
//     }));
//   };

const updatePaymentStatus = (eventId, status) => {
    setBookedEvents((prevEvents) =>
      prevEvents.map((event, index) =>
        index === eventId ? { ...event, paymentStatus: status } : event
      )
    );
  };
  return (
    <CartContext.Provider value={{ bookedEvents, addEventToCart, paymentStatus, updatePaymentStatus }}>
      {children}
    </CartContext.Provider>
  );
};
