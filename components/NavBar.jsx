import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pic from '../assets/images/Add a little bit of body text.png';
import userIcon from '../assets/images/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';
import '../assets/css/NavBar.css';

const NavBar = () => {
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
      <div className="navbar">
        <img src={pic} alt="Logo" className="title-pic" />
        <div className="menu-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-content ${isMenuOpen ? 'mobile-menu active' : ''}`}>
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
          <div className="head contact-link-wrapper">
            <Link to="/gallery" className="contact-link"><p>Gallery</p></Link>
            <div className="line"></div>
          </div>
          <div className="head contact-link-wrapper">
            <Link to="/contact" className="contact-link"><p>Contact Us</p></Link>
            <div className="line"></div>
          </div>
          {isLoggedIn ? (
            <div className="dd head">
              <img src={userIcon} alt="User" className="user-icon" />
              <div className="dd-content">
                <Link to="/profile">Profile</Link>
                <Link to="/cart">MY EVENTS</Link>
                <a href="#logout" onClick={handleLogout}>Logout</a>
              </div>
            </div>
          ) : (
            <div className="head">
              <p>
                <Link to="/login" className="btn">Login</Link>
              </p>
              <div className="line"></div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
