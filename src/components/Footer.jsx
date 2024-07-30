import React from 'react';
import '../assets/css/Footer.css'; // Ensure this path is correct
// import logo from '../assets/images/logo.png'; // Replace with your logo
import pic from '../assets/images/Add a little bit of body text.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={pic} alt="Party Management" />
          <p>Creating Unforgettable Memories</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-subscribe">
          <h3>Subscribe to Our Newsletter</h3>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Party Management. All rights reserved.</p>
        <p>123 Party Ave, Celebration City, NY</p>
      </div>
    </footer>
  );
};

export default Footer;