
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NavBar from './NavBar';
import Footer from './Footer';
import i1 from '../assets/images/pexels-pixabay-265947.jpg';
import i2 from '../assets/images/conference.jpg';
import i3 from '../assets/images/Bellagio-Hotel-Casino-Las-Vegas.webp';
import i4 from '../assets/images/pexels-pixabay-259588.jpg';
import i5 from '../assets/images/pexels-214985283-11845552.jpg';
import i6 from '../assets/images/pexels-meo-fernando-1487257-3204577.jpg';
import i7 from '../assets/images/WhatsApp Image 2024-07-24 at 15.07.26_7559f094.jpg';
import i8 from '../assets/images/20131031143708_10_1.jpg';
import i9 from '../assets/images/Sail-Tent-event-scaled.jpg';
import '../assets/css/VenueDetails.css'
import { useNavigate } from 'react-router-dom';

const VenueDetails = () => {
    const navigate=useNavigate();
    const carddata = [
        { title: "Banquet Halls", image: i1},
        { title: "Conference centers", image: i2},
        { title: "Hotels", image: i3},
        { title: "House", image: i4},
        { title: "OutDoor venues", image: i5},
        { title: "Roof Top Venues", image: i6},
        { title: "Beach", image: i7},
        { title: "Temple", image: i8},
        { title: "Farms", image: i9}
    ];

    const handleBookNow = (title) => {
        // Navigate to the cuisine page with venue title in state
        navigate('/cusine', { state: { selectedVenue: title } });
      };
      
    return (
        <div>
            <NavBar />
            <div className="venue-container">
                <div className="venue-heading">
                    <h1>Venues Available</h1>
                </div>
                <div className="venue-card-grid">
                    {carddata.map((card, index) => (
                        <Card key={index} className="venue-card">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={card.image}
                                    alt={`Image for ${card.title}`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='venue-title'>
                                        {card.title}
                                    </Typography>
                                    {/* You can add a description if needed */}
                                </CardContent>
                            </CardActionArea>
                            <div className="card-actions">
                                <button className='venue-btn' onClick={() => handleBookNow(card.title)}>
                                    <p>Select</p>
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

export default VenueDetails;
