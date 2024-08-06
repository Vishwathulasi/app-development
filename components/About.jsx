import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import about from '../assets/images/pexels-ibrahimboran-903400.jpg';
import '../assets/css/About.css'; // Ensure this path is correct

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="about-container">
        <div className="about-pic">
          <img src={about} alt="About Us" />
        </div>
        <div className="about-content">
          <h3>About Dew Event Management</h3>
          <p>
            At Dew Event Management, we are committed to delivering exceptional event planning experiences in Coimbatore. Our approach focuses on creating a win-win situation for all stakeholders involved. We strive not for one-time interactions but for long-lasting collaborations that ensure a positive and memorable experience for both clients and guests.
            <br /><br />
            Our mission is to enhance every occasion with:
            <br /><br />
            <strong>Elegant Décor Designs:</strong> Adding a touch of sophistication and style to every event.
            <br />
            <strong>Customized Destination Wedding Services:</strong> Offering personalized facilities and services for your dream wedding.
            <br />
            <strong>Outstanding Performances:</strong> Featuring talented artists to make your celebration truly special.
            <br />
            <strong>Premier Venues:</strong> Hosting your events at some of the best and most sought-after locations.
            <br /><br />
            At Dew, our goal is to cultivate a WOW customer experience and contribute to the prosperity of everyone involved in the event. We are dedicated to creating lasting impressions and building enduring relationships with our clients.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
