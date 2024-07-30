import React, { useState } from 'react';
import '../assets/css/BookingDetails.css';
import { useContext } from 'react';
import { EventContext } from './EventContext';
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate , useLocation} from 'react-router-dom';
import { useCart } from './CartContext';

const BookingDetails = () => {
    const { eventType } = useContext(EventContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
        occupation: '',
        eventDate: '',
        startTime: '',
        endTime: '',
        numberOfGuests: '',
    });
  
    const { state } = useLocation(); // Retrieve state from navigation
    const { selectedVenue } = state || {}; // Venue from navigation
    const { selectedCuisine } = state || {}; // Cuisine from navigation
    const navigate=useNavigate();
    const { addEventToCart } = useCart();
  const [paymentStatus, setPaymentStatus] = useState(false);


//   const handleVenueChange = (e) => {
//     setSelectedVenue(e.target.value);
//   };

//   const handleCuisineChange = (e) => {
//     setSelectedCuisine(e.target.value);
//   };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add booking details to the cart context
    addEventToCart({
      name: formData.name,
      duration:  `${formData.startTime} - ${formData.endTime}`,
      guests: formData.numberOfGuests,
      date: formData.eventDate,
      venue: selectedVenue,
      cuisine: selectedCuisine,
      paymentStatus, // Or true if payment is complete
    });
    navigate('/venue');
    // navigate('/payment');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
    <NavBar/>
    <div className="booking-details">
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} required />
        </div>

        <h2>Event Details</h2>
        <div className="form-group">
          <label htmlFor="eventType">Event Type:</label>
          <input type="text" id="eventType" name="eventType" value={eventType} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date:</label>
          <input type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="startTime">Start Time:</label>
          <input type="time" id="startTime" name="startTime" value={formData.startTime} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="endTime">End Time:</label>
          <input type="time" id="endTime" name="endTime" value={formData.endTime} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfGuests">Number of Guests:</label>
          <input type="number" id="numberOfGuests" name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange} required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default BookingDetails;
