import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import im1 from '../assets/images/647af278214eb_7467b6cc417cf861d7bdf9f10db4082f.jpg';
import im2 from '../assets/images/pexels-melissa-220267-698907.jpg';
import im3 from '../assets/images/pexels-jonathanborba-12846017.jpg';
import im4 from '../assets/images/pexels-divinetechygirl-1181406.jpg';
import im5 from '../assets/images/Sail-Tent-event-scaled.jpg';
import im6 from '../assets/images/pexels-ibrahimboran-903400.jpg';
import im7 from '../assets/images/alumini-meet.webp';
import im8 from '../assets/images/award-ceremony-event.png';
import im9 from '../assets/images/20131031143708_10_1.jpg';
import '../assets/css/Gallery.css';
import NavBar from './NavBar';
import Footer from './Footer';

const Gallery = () => {
  const cardData = [
    { title: "Wedding", image: im1 },
    { title: "Engagement", image: im2 },
    { title: "Birthday Event", image: im3 },
    { title: "Corporate Event", image: im4 },
    { title: "Destination Wedding", image: im5 },
    { title: "Exhibition", image: im6 },
    { title: "College Events", image: im7 },
    { title: "Award Ceremonies", image: im8 },
    { title: "Temple Festival", image: im9 }
  ];

  return (
    <div>
      <NavBar/>
      <div className="gallery-container">
        <div className="gallery-heading">
          <h1>Gallery</h1>
        </div>
        <div className="gallery-card-grid">
          {cardData.map((card, index) => (
            <Card key={index} className="gallery-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={card.image}
                  alt={`Image for ${card.title}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='gallery-title'>
                    {card.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Gallery;
