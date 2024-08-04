import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Paper, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import necessary components
import { Carousel } from 'react-responsive-carousel';
const KnowMore = () => {
    const testimonials = [
        { name: "Dr. Smith", text: "CARE MEDI has transformed the way we monitor our patients. The real-time alerts have been a game-changer for our practice." },
        { name: "Jane Doe", text: "As a patient, I feel more secure knowing that my health is being continuously monitored. The app is easy to use and very informative." },
        { name: "John Doe", text: "The comprehensive health data analytics provided by CARE MEDI have helped us make more informed decisions about patient care." },
        { name: "Dr. Emily", text: "The integration with our existing healthcare systems was seamless, and the user-friendly interface makes it easy for our staff to use." },
        { name: "Mary Johnson", text: "CARE MEDI has significantly improved my engagement with my healthcare providers. I feel more involved in my own health management." }
    ];
    const colors = ["#84D2F6", "#91E5F6", "#59A5D8", "#386FA4"];

    return (
        <div style={{ backgroundImage: 'url(https://i.pinimg.com/originals/6b/31/db/6b31dbf725759f1d765a794f79778a09.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '20px' }}>
        <Container>
            <br/>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Box textAlign="center">
                <br/>
                    <h1>CARE MEDI</h1>
                    <br/>
                    <p>What do we do?</p>
                    <br/>
                    <p>As a patient monitoring system, we aim to provide people with a universal all-in-one application. We provide the user with the ability to view all of their medical records, tests, and medications.</p>
                </Box>
                <Box mt={4}>
                    <h2>Our Mission</h2>
                    <br/>
                    <p>Our mission is to revolutionize healthcare by providing seamless and continuous monitoring of patients' health. We strive to enhance the quality of care through innovative technology and real-time data analytics.</p>
                    <br/>
                </Box>
                <Box mt={4}>
                    <h2>Key Features</h2>
                    <br/>
                    <ul>
                        <li>Real-time monitoring of vital signs</li>
                        <li>Automated alerts for healthcare providers</li>
                        <li>Comprehensive health data analytics</li>
                        <li>Easy integration with existing healthcare systems</li>
                        <li>User-friendly interface for patients and healthcare providers</li>
                    </ul>
                    <br/>
                </Box>
                <Box mt={4}>
                    <h2>Benefits</h2>
                    <br/>
                    <p>CARE MEDI offers numerous benefits, including:</p>
                    <ul>
                        <li>Improved patient outcomes through timely interventions</li>
                        <li>Enhanced efficiency for healthcare providers</li>
                        <li>Reduced healthcare costs by preventing complications</li>
                        <li>Increased patient engagement and satisfaction</li>
                    </ul>
                </Box>
                <Box mt={4}>
                <br/>
                <div className='carousel-container'>
            <Carousel autoPlay interval={3000} infiniteLoop>
                {testimonials.map((testimonial, index) => (
                    <div key={index} style={{ backgroundColor: colors[index % colors.length], padding: '20px', color: '#fff' }}>
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.text}</p>
                        <br/>
                    </div>
                ))}
            </Carousel>
        </div>
                </Box>
            </Paper>
        </Container>
        </div>
    );
};

export default KnowMore;
