import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import m1 from '../assets/images/pexels-chanwalrus-958545.jpg';
import m2 from '../assets/images/indo-chinese-food.jpg';
import m3 from '../assets/images/images (1).jpeg';
import m4 from '../assets/images/images (2).jpeg';
import m5 from '../assets/images/images.jpeg';
import m6 from '../assets/images/Mexican-Cuisine-scaled.jpg';
import '../assets/css/Cuisines.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import NavBar from './NavBar';
import Footer from './Footer';

const Cuisines = () => {
  const { setEventCuisine } = useContext(CartContext);
  const navigate = useNavigate();

  const cardData = [
    { title: 'Indian Cuisine', image: m1 },
    { title: 'Chinese Cuisine', image: m2 },
    { title: 'South Indian Cuisine', image: m3 },
    { title: 'French Cuisine', image: m4 },
    { title: 'Mediterranean Cuisine', image: m5 },
    { title: 'Mexican Cuisine', image: m6 },
  ];

  const handleBookNow = (title) => {
    setEventCuisine(title);
    navigate('/booking-details');
  };

  return (
    <div>
      <NavBar />
      <div className="cuisine-container">
        <div className="cuisine-heading">
          <h1>Cuisines</h1>
        </div>
        <div className="cuisine-card-grid">
          {cardData.map((card, index) => (
            <Card key={index} className="cuisine-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={card.image}
                  alt={`Image for ${card.title}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="cuisine-title">
                    {card.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className="card-actions">
                <button className="cuisine-btn" onClick={() => handleBookNow(card.title)}>
                  <p>Book Now</p>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cuisines;
