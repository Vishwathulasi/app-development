import React, { useState, useEffect } from 'react';
import ANavBar from './ANavBar';
import Footer from './Footer';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Snackbar, Alert } from '@mui/material';
import im1 from '../assets/images/indian-wedding-decor-ideas-ai-generated-photo.jpg';
import im2 from '../assets/images/pexels-reneterp-1345574.jpg';
import im3 from '../assets/images/birthday-celebration-pictures-nzdifqhivh56h19i.jpg';
import im4 from '../assets/images/Corporate-Events.jpg';
import im5 from '../assets/images/beach-wedding-destinations.jpg';
import im6 from '../assets/images/What-To-Consider-When-Planning-Your-Exhibition-Stall-Design.jpg';
import im7 from '../assets/images/alumini-meet.webp';
import im8 from '../assets/images/award-ceremony-event.png';
import im9 from '../assets/images/20131031143708_10_1.jpg';
import '../assets/css/ManageEvents.css';
import i1 from '../assets/images/pexels-pixabay-265947.jpg';
import i2 from '../assets/images/conference.jpg';
import i3 from '../assets/images/Bellagio-Hotel-Casino-Las-Vegas.webp';
import i4 from '../assets/images/pexels-pixabay-259588.jpg';
import i5 from '../assets/images/pexels-214985283-11845552.jpg';
import i6 from '../assets/images/pexels-meo-fernando-1487257-3204577.jpg';
import i7 from '../assets/images/WhatsApp Image 2024-07-24 at 15.07.26_7559f094.jpg';
import i8 from '../assets/images/20131031143708_10_1.jpg';
import i9 from '../assets/images/Sail-Tent-event-scaled.jpg';

const initialData = [
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

const initialVenueData = [
  { title: "Banquet Halls", image: i1 },
  { title: "Conference centers", image: i2 },
  { title: "Hotels", image: i3 },
  { title: "House", image: i4 },
  { title: "OutDoor venues", image: i5 },
  { title: "Roof Top Venues", image: i6 },
  { title: "Beach", image: i7 },
  { title: "Temple", image: i8 },
  { title: "Farms", image: i9 }
];

const ManageEvents = () => {
  const [cardData, setCardData] = useState(() => {
    const savedData = localStorage.getItem('cardData');
    return savedData ? JSON.parse(savedData) : initialData;
  });

  const [venueData, setVenueData] = useState(() => {
    const savedData = localStorage.getItem('venueData');
    return savedData ? JSON.parse(savedData) : initialVenueData;
  });

  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [currentEvent, setCurrentEvent] = useState({ title: '', image: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isVenue, setIsVenue] = useState(false);

  useEffect(() => {
    localStorage.setItem('cardData', JSON.stringify(cardData));
    localStorage.setItem('venueData', JSON.stringify(venueData));
  }, [cardData, venueData]);

  const handleEditClick = (event, index, isVenue) => {
    setCurrentEvent(event);
    setEditIndex(index);
    setIsEditing(true);
    setIsVenue(isVenue);
    setOpen(true);
  };

  const handleDeleteClick = (index, isVenue) => {
    if (isVenue) {
      const updatedVenueData = venueData.filter((_, i) => i !== index);
      setVenueData(updatedVenueData);
    } else {
      const updatedCardData = cardData.filter((_, i) => i !== index);
      setCardData(updatedCardData);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentEvent({ title: '', image: '' });
    setIsEditing(false);
    setEditIndex(null);
    setIsVenue(false);
  };

  const handleSave = () => {
    if (!currentEvent.title || !currentEvent.image) {
      setSnackbarMessage('All details must be filled');
      setSnackbarOpen(true);
      return;
    }
    if (isEditing) {
      if (isVenue) {
        const updatedVenueData = [...venueData];
        updatedVenueData[editIndex] = currentEvent;
        setVenueData(updatedVenueData);
        setSnackbarMessage('Venue updated');
      } else {
        const updatedCardData = [...cardData];
        updatedCardData[editIndex] = currentEvent;
        setCardData(updatedCardData);
        setSnackbarMessage('Event updated');
      }
    } else {
      if (isVenue) {
        setVenueData([...venueData, currentEvent]);
        setSnackbarMessage('Venue added');
      } else {
        setCardData([...cardData, currentEvent]);
        setSnackbarMessage('Event added');
      }
    }
    setSnackbarOpen(true);
    handleClose();
  };

  const handleAddEventClick = (isVenue) => {
    setCurrentEvent({ title: '', image: '' });
    setIsEditing(false);
    setEditIndex(null);
    setIsVenue(isVenue);
    setOpen(true);
  };

  return (
    <div>
      <ANavBar />
      <div className="manage-container">
        <div className="manage-events-head">
          <h1>Events</h1>
          <div className="manage-events-head-right">
            <p>Total No: {cardData.length}</p>
            <button className='manage-event-btn' onClick={() => handleAddEventClick(false)}>Add Event</button>
          </div>
        </div>
        <div className="manage-events">
          {cardData.map((card, index) => (
            <Card key={index} className="manage-events-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={card.image}
                  alt={`Image for ${card.title}`}
                />
                <CardContent className='manage-card-content'>
                  <Typography gutterBottom variant="h5" component="div" className='manage-event-title'>
                    {card.title}
                  </Typography>
                  <div className="manage-card-actions">
                    <button className='manage-card-btn' onClick={() => handleEditClick(card, index, false)}>Edit</button>
                    <button className='manage-card-btn' onClick={() => handleDeleteClick(index, false)}>Delete</button>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
        
        <div className="manage-venue-head">
          <h1>Venues</h1>
          <div className="manage-venue-head-right">
            <p>Total No: {venueData.length}</p>
            <button className='manage-venue-btn' onClick={() => handleAddEventClick(true)}>Add Venue</button>
          </div>
        </div>
        <div className="manage-venues">
          {venueData.map((venue, index) => (
            <Card key={index} className="manage-venue-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={venue.image}
                  alt={`Image for ${venue.title}`}
                />
                <CardContent className='manage-card-content'>
                  <Typography gutterBottom variant="h5" component="div" className='manage-event-title'>
                    {venue.title}
                  </Typography>
                  <div className="manage-card-actions">
                    <button className='manage-card-btn' onClick={() => handleEditClick(venue, index, true)}>Edit</button>
                    <button className='manage-card-btn' onClick={() => handleDeleteClick(index, true)}>Delete</button>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
      <Footer />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit Event/Venue' : 'Add Event/Venue'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            variant="standard"
            value={currentEvent.title}
            onChange={(e) => setCurrentEvent({ ...currentEvent, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Image URL"
            fullWidth
            variant="standard"
            value={currentEvent.image}
            onChange={(e) => setCurrentEvent({ ...currentEvent, image: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <button className='manage-dialog-btn' onClick={handleClose}>Cancel</button>
          <button className='manage-dialog-btn' onClick={handleSave}>{isEditing ? 'Update' : 'Add'}</button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ManageEvents;
