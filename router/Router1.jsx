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
import Gallery from '../components/Gallery';
// import ANavBar from '../components/ANavBar';
import AHomePage from '../components/AHomepage'
import AAbout from '../components/AAbout'
import ManageEvents from '../components/ManageEvents';
import ManageUser from '../components/ManageUser';
import AProfile from '../components/AProfile';
import AllBookings from '../components/AllBookings';

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
      <Route path='/gallery' element={<Gallery/>} />
      {/* <Route path='/anav' element={<ANavBar/>} /> */}
      <Route path='/AHomePage' element={<AHomePage/>} />
      <Route path='/admin-about' element={<AAbout/>} />
      <Route path='/manage-events' element={<ManageEvents/>} />
      <Route path='/manage-users' element={<ManageUser/>} />
      <Route path='/manage-profile' element={<AProfile/>} />
      <Route path='/all-bookings' element={<AllBookings/>} />
    </Routes>
    </CartProvider>
    </EventProvider>
  );
};

export default Router1;
