import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/Add a little bit of body text.png'; // Change the image as needed
import adminIcon from '../assets/images/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'; // Change the image as needed
import '../assets/css/ANavBar.css';

const NewNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    setIsLoggedIn(!!loggedInUser); 
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); 
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/homepage'); 
  };

  return (
    <header>
      <div className="new-navbar">
        <img src={logo} alt="Logo" className="new-title-pic" />
        <div className="new-menu-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`new-nav-content ${isMenuOpen ? 'new-mobile-menu active' : ''}`}>
          <div className="new-head new-contact-link-wrapper">
            <Link to="/AHomePage" className="new-contact-link"><p>Home</p></Link>
            <div className="new-line"></div>
          </div>
          <div className="new-head new-contact-link-wrapper">
            <Link to="/admin-about" className="new-contact-link"><p>About</p></Link>
            <div className="new-line"></div>
          </div>
          {/* <div className="new-head new-contact-link-wrapper">
            <Link to="/all-events" className="new-contact-link"><p>All Events</p></Link>
            <div className="new-line"></div>
          </div> */}
          {isLoggedIn ? (
            <div className="new-dd new-head">
              <img src={adminIcon} alt="Admin" className="new-user-icon" />
              <div className="new-dd-content">
                <Link to="/manage-events">Manage Events</Link>
                <Link to="/all-bookings">All Bookings</Link>
                <Link to="/manage-users">Manage Users</Link>
                <Link to="/manage-profile">Profile</Link>
                <a href="#logout" onClick={handleLogout}>Logout</a>
              </div>
            </div>
          ) : (
            <div className="new-head">
              <p>
                <Link to="/login" className="new-btn">Login</Link>
              </p>
              <div className="new-line"></div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NewNavBar;
