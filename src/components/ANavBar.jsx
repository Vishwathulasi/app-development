import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pic from '../assets/images/Add a little bit of body text.png';
import userIcon from '../assets/images/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'; // Add a user icon image
import '../assets/css/ANavBar.css';

const ANavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Clear logged in user info
    setIsLoggedIn(false);
    navigate('/homepage'); // Redirect to login page
  };

  const handleUserIconClick = () => {
    setIsDropdownVisible(true);
    setTimeout(() => {
      setIsDropdownVisible(false);
    }, 10000); // Show dropdown for 2 seconds
  };

  return (
    <div>
      <header>
        <div className="navbar">
          <div className="menu-button" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`nav-content ${isMenuOpen ? 'mobile-menu active' : ''}`}>
            <div className="content">
            <div className="head contact-link-wrapper">
                <Link to="/" className="contact-link"><p>Home</p></Link>
                <div className="line"></div>
              </div>
              <div className="head contact-link-wrapper">
                <Link to="/about" className="contact-link"><p>About</p></Link>
                <div className="line"></div>
              </div>
              <div className="head contact-link-wrapper">
                <Link to="/event" className="contact-link"><p>Events</p></Link>
                <div className="line"></div>
              </div>
            </div>
            <div className="title">
              <img src={pic} alt="jk" className="title-pic" />
            </div>
            <div className="content">
              <div className="head">
                <p>Add Event</p>
                <div className="line"></div>
              </div>
              <div className="head contact-link-wrapper">
                <Link to="/anav" className="contact-link"><p>All Bookings</p></Link>
                <div className="line"></div>
              </div>
              {isLoggedIn ? (
                <div className="dd head">
                    {/* console.log("logged in") */}
                  <img src={userIcon} alt="User" className="user-icon" />
                  <div className={`dd-content ${isDropdownVisible ? 'visible' : ''}`}>
                    <Link to="/profile">Profile</Link>
                    <Link to="/cart">MY EVENTS</Link>
                    <a href="#logout" onClick={handleLogout}>Logout</a>
                  </div>
                </div>
              ) : (
                  <div className="head">
                    {/* console.log("not login"); */}
                  <p>
                    <Link to="/login" className="btn">Login</Link>
                  </p>
                  <div className="line"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ANavBar;
