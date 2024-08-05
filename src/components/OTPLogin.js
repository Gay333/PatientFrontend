/*import axios from 'axios';
import React, { useState } from 'react';

const OTPForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    //axios.defaults.baseURL = 'http://localhost:8080';
    const handleGenerateOTP = async () => {
        try {
            const response = await fetch('http://localhost:8080/otp/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ phoneNumber }),
            });
            const data = await response.text();
            setMessage(data);
        } catch (error) {
            console.error('Error generating OTP:', error);
            setMessage('Error generating OTP');
        }
    };

    return (
        <div>
            <h1>Generate OTP</h1>
            <input
                type="text"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleGenerateOTP}>Generate OTP</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default OTPForm;



import axios from 'axios';
import React, { useState } from 'react';

const OTPForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleGenerateOTP = async () => {
        try {
            const response = await axios.post('http://localhost:8080/otp/generate', new URLSearchParams({ phoneNumber }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            setMessage(response.data);
        } catch (error) {
            console.error('Error generating OTP:', error);
            setMessage('Error generating OTP');
        }
    };

    return (
        <div>
            <h1>Generate OTP</h1>
            <input
                type="text"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleGenerateOTP}>Generate OTP</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default OTPForm;

*/
/*
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom'; // Import useHistory for navigation

const OTPForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useHistory

    const handleGenerateOTP = async () => {
        try {
            const response = await axios.post('http://localhost:8080/otp/generate', new URLSearchParams({ phoneNumber }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            setMessage(response.data);
        } catch (error) {
            console.error('Error generating OTP:', error);
            setMessage('Error generating OTP');
        }
    };

    const handleVerifyOTP = async () => {
        try {
            const response = await axios.post('http://localhost:8080/otp/verify', new URLSearchParams({ phoneNumber, otp }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            if (response.data === true) {
                navigate('/patient-profile'); // Navigate to /profile if OTP is verified
            } else {
                setMessage('Invalid OTP');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setMessage('Error verifying OTP');
        }
    };

    return (
        <div>
            <h1>Generate OTP</h1>
            <input
                type="text"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleGenerateOTP}>Generate OTP</button>
            {message && <p>{message}</p>}
            <h1>Verify OTP</h1>
            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
    );
};

export default OTPForm;

*/
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Container, Paper, Box, TextField, Button, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link } from 'react-router-dom';


const OTPForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center'};


    const handleGenerateOTP = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/otp/generate', new URLSearchParams({ phoneNumber }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            setMessage(response.data);
            setIsError(false);
        } catch (error) {
            console.error('Error generating OTP:', error);
            setMessage('Error generating OTP');
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOTP = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/otp/verify', new URLSearchParams({ phoneNumber, otp }), {
            headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            if (response.data === true) {
                window.globalVariable = 1;
                navigate('/patient-profile'); // Navigate to /patient-profile if OTP is verified
            } else {
                setMessage('Invalid OTP');
                setIsError(true);
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setMessage('Error verifying OTP');
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h4" align="center" gutterBottom>
                        Login
                    </Typography>
                    <div style={{ marginBottom: '20px' }}></div>

                    <TextField
                        id="outlined-phone"
                        label="Patient Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        helperText={isError ? "Please enter your phone number" : ""}
                        variant="outlined"
                        fullWidth
                    />
                                        <div style={{ marginBottom: '20px' }}></div>

                    <Button variant="contained" color="secondary" onClick={handleGenerateOTP} disabled={isLoading}>
                        Generate OTP
                    </Button>
                    <div style={{ marginBottom: '20px' }}></div>

                    <TextField
                        id="outlined-otp"
                        label="OTP Received"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        helperText={isError ? "Please enter the OTP" : ""}
                        variant="outlined"
                        fullWidth
                    />
                                        <div style={{ marginBottom: '20px' }}></div>

                    <LoadingButton
                        loading={isLoading}
                        variant="contained"
                        onClick={handleVerifyOTP}
                    >
                        Verify OTP
                    </LoadingButton>
                    {message && <Typography color={isError ? 'error' : 'secondary'}>{message}</Typography>}
                    <p style={{ textAlign: 'center', color: '#133C55', display: 'block' }}>
                        <Link to="/register" style={{ color: 'inherit', textDecoration: 'none' }}>No account? Sign up</Link>
                    </p>
                </Box>
            </Paper>
        </Container>
    );
};

export default OTPForm;
