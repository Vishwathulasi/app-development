import React from 'react'
import Footer from './Footer';
import NavBar from './NavBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import m1 from '../assets/images/pexels-chanwalrus-958545.jpg'
import m2 from '../assets/images/indo-chinese-food.jpg'
import m3 from '../assets/images/images (1).jpeg'
import m4 from '../assets/images/images (2).jpeg'
import m5 from '../assets/images/images.jpeg'
import m6 from '../assets/images/Mexican-Cuisine-scaled.jpg'
import '../assets/css/Cuisines.css'
import { useNavigate } from 'react-router-dom';

const Cuisines = () => {
    const navigate=useNavigate();
    const carddatas = [
        { title: "Indian", image: m1},
        { title: "Chineese", image: m2},
        { title: "South Indian", image: m3},
        { title: "French", image: m4},
        { title: "Italians", image: m5},
        { title: "Mexican", image: m6},
    ];
    const handleBookNow = (title) => {
        // Navigate to the payment page with cuisine title in state
        navigate('/payment', { state: { selectedCuisine: title } });
      };
      

  return (
    <div>
        <NavBar/>
            <div className="cusine-container">
                <div className="cusine-heading">
                    <h1>cusines Available</h1>
                </div>
                <div className="cusine-card-grid">
                    {carddatas.map((card, index) => (
                        <Card key={index} className="cusine-card">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={card.image}
                                    alt={`Image for ${card.title}`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='cusine-title'>
                                        {card.title}
                                    </Typography>
                                    {/* You can add a description if needed */}
                                </CardContent>
                            </CardActionArea>
                            <div className="card-actions">
                                <button className='cusine-btn' onClick={() => handleBookNow(card.title)}>
                                    <p>Select</p>
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer/>
    </div>
  )
}

export default Cuisines