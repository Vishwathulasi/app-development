import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import HomePage from '../components/HomePage';
import Register from '../components/Register';
import ForgotPassword from '../components/ForgotPassword';
import ProfilePage from '../components/ProfilePage';
import ContactUs from '../components/ContactUs';
import About from '../components/About';
import MyEvents from '../components/MyEvents';
import BookingDetails from '../components/BookingDetails';
import { EventProvider } from '../components/EventContext';
import VenueDetails from '../components/VenueDetails';
import Cuisines from '../components/Cuisines';
import Cart from '../components/Cart';
// import { Payment } from '@mui/icons-material';
import PaymentComp from '../components/PaymentComp';
import { CartProvider } from '../components/CartContext';
import ANavBar from '../components/ANavBar';
import AHomePage from '../components/AHomePage'

const Router1 = () => {
  return (
    <EventProvider>
    <CartProvider>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path='/homepage' element={<HomePage/>} />
      <Route path='/profile' element={<ProfilePage/>} />
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/event' element={<MyEvents/>} />
      <Route path='/booking-details' element={<BookingDetails/>} />
      <Route path='/venue' element={<VenueDetails/>} />
      <Route path='/cusine' element={<Cuisines/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/payment' element={<PaymentComp/>} />
      <Route path='/anav' element={<ANavBar/>} />
      <Route path='/AHomePage' element={<AHomePage/>} />
    </Routes>
    </CartProvider>
    </EventProvider>
  );
};

export default Router1;
