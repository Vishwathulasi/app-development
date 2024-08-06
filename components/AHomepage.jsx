import React from 'react';
import '../assets/css/AHomePage.css';
import { Card } from '@mui/material';
import Footer from './Footer';
import ANavBar from './ANavBar'
import CountUp from 'react-countup';
import vid1 from '../assets/css/5c2e97044ab152f56cb7c8c73ab198b7.mp4';

const NewHomePage = () => {
  const experience = 50;
  const events = 1000;
  const successfulEvents = 995;
  return (
    <div>
      <ANavBar/>
      <div className='new-home-container'>
        <div className="new-image">
          {/* <p className='new-midLine'>New Dew Event Management</p> */}
        </div>
        <div className="new-content">
          <div className="new-video">
            <video width="400px" height="auto" controls autoPlay muted loop>
              <source src={vid1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="new-box">
            <Card className="new-info-card">
              <p>Experience</p>
              <p><CountUp start={0} end={experience} duration={10} />+ years</p>
            </Card>
            <Card className="new-info-card">
              <p>Events</p>
              <p><CountUp start={0} end={events} duration={10} /></p>
            </Card>
            <Card className="new-info-card">
              <p>Successful Events</p>
              <p><CountUp start={0} end={successfulEvents} duration={10} /></p>
            </Card>
            <div className="admin-icon">
              <p>Admin</p>
              <div className="admin-dropdown">
                <a href="#manage-events">Manage Events</a>
                <a href="#all-bookings">All Bookings</a>
                <a href="#manage-users">Manage Users</a>
                <a href="#profile">Profile</a>
                <a href="#logout">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewHomePage;
