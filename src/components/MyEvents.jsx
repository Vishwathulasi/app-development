import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import im1 from '../assets/images/indian-wedding-decor-ideas-ai-generated-photo.jpg';
import im2 from '../assets/images/pexels-reneterp-1345574.jpg';
import im3 from '../assets/images/birthday-celebration-pictures-nzdifqhivh56h19i.jpg';
import im4 from '../assets/images/Corporate-Events.jpg';
import im5 from '../assets/images/beach-wedding-destinations.jpg';
import im6 from '../assets/images/What-To-Consider-When-Planning-Your-Exhibition-Stall-Design.jpg';
import im7 from '../assets/images/alumini-meet.webp';
import im8 from '../assets/images/award-ceremony-event.png';
import im9 from '../assets/images/20131031143708_10_1.jpg';
import '../assets/css/MyEvents.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { EventContext } from './EventContext';

const MyEvents = () => {
  const { setEventType } = useContext(EventContext);
  const navigate = useNavigate();
    const cardData = [
        { title: "Wedding", image: im1},
        { title: "Engagement", image: im2},
        { title: "Birthday Event", image: im3},
        { title: "Corporate Event", image: im4},
        { title: "Destination Wedding", image: im5},
        { title: "Exhibition", image: im6},
        { title: "College Events", image: im7},
        { title: "Award Ceremonies", image: im8},
        { title: "Temple Festival", image: im9}
      ];

      const handleBookNow = (title) => {
        setEventType(title);
        navigate('/booking-details'); // Assuming you have a route set up for BookingDetails
      };
    

  return (
    <div>
      <NavBar/>
      <div className="event-container">
        <div className="event-heading">
          <h1>Our Services</h1>
        </div>
        <div className="event-card-grid">
          {cardData.map((card, index) => (
            <Card key={index} className="event-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300" // Increase the height here
                  image={card.image}
                  alt={`Image for ${card.title}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='event-title'>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions className="card-actions">
                <Button className='event-btn'>
                  <p>Book Now</p>
                </Button>
              </CardActions> */}
              <div className="card-actions">
                <button className='event-btn' onClick={() => handleBookNow(card.title)}><p>Book Now</p></button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default MyEvents;

