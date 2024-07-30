import React from 'react';
import '../assets/css/ContactUs.css'; // Ensure this path is correct
import NavBar from './NavBar';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <div className="contact-us-wrapper">
        <section className="contact-us">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
            Have any questions? We'd love to hear from you. Please fill out the form below, and we'll get in touch with you as soon as possible.
            </p>
            <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
            </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
