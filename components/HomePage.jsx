import React, { useState } from 'react';
import '../assets/css/HomePage.css';
import vid1 from '../assets/css/5c2e97044ab152f56cb7c8c73ab198b7.mp4';
import { Card } from '@mui/material';
import Footer from './Footer';
import NavBar from './NavBar';
import CountUp from 'react-countup';

const HomePage = () => {
  const experience = 50;
  const events = 1000;
  const successfulEvents = 995;

  return (
    <div>
      <NavBar />
      <div className='home-container'>
        <div className="image">
          {/* <p className='midLine'>Dew Event Management</p> */}
        </div>
        <div className="content">
          <div className="video">
            <video width="400px" height="auto" controls autoPlay muted loop>
              <source src={vid1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="box">
            <Card className="info-card">
              <p>Experience</p>
              <p><CountUp start={0} end={experience} duration={2} />+ years</p>
            </Card>
            <Card className="info-card">
              <p>Events</p>
              <p><CountUp start={0} end={events} duration={2} /></p>
            </Card>
            <Card className="info-card">
              <p>Successful Events</p>
              <p><CountUp start={0} end={successfulEvents} duration={2} /></p>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
