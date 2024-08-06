import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, TextField, Button, MenuItem, Snackbar, Typography } from '@mui/material';
import NavBar from './NavBar';
import Footer from './Footer';
import '../assets/css/Payment.css';
import { useCart } from './CartContext';

const PaymentComponent = () => {
  const [paymentOption, setPaymentOption] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { bookedEvents, updatePaymentStatus } = useCart();
  const navigate = useNavigate();

  const handleDropdownChange = (event) => {
    const { value } = event.target;
    setPaymentOption(value);
    if (value === 'paylater') {
      navigate('/cart', { state: { paymentStatus: false } });
    } else {
      setShowForm(true);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSnackbarOpen(true);
    // Update payment status for the last booked event (assuming it's the one being paid for)
    const eventId = bookedEvents.length - 1;
    updatePaymentStatus(eventId, true);
    navigate('/cart', { state: { paymentStatus: true } });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    navigate('/cart');
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="payment-container">
      <NavBar />
      <div className="payment-content">
        <Typography variant="h4" className="payment-heading">Payment</Typography>
        {!showForm && (
          <TextField
            select
            label="Select Payment Option"
            value={paymentOption}
            onChange={handleDropdownChange}
            variant="outlined"
            className="payment-dropdown"
            InputLabelProps={{ shrink: false }} // Prevent the label from moving up
          >
            <MenuItem value="paynow">Pay Now</MenuItem>
            <MenuItem value="paylater">Pay Later</MenuItem>
          </TextField>
        )}

        {showForm && (
          <Card className="payment-card">
            <CardContent>
              <form onSubmit={handleFormSubmit}>
                <TextField
                  select
                  label="Select Payment Method"
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                >
                  <MenuItem value="netbanking">Net Banking</MenuItem>
                  <MenuItem value="upi">UPI</MenuItem>
                </TextField>

                {paymentMethod === 'netbanking' && (
                  <>
                    <TextField
                      label="Name on Card"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                    />
                    <TextField
                      label="Card Number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                    />
                    <TextField
                      label="Expiry Date"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                    />
                    <TextField
                      label="CVV"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                    />
                  </>
                )}

                {paymentMethod === 'upi' && (
                  <TextField
                    label="UPI ID"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  />
                )}

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  className="paynow-button"
                >
                  Pay Now
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message="Payment Successful"
          anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default PaymentComponent;
