import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Paper, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import necessary components

const MedicalRecords = () => {
    const [tests, setTests] = useState([]);
    axios.defaults.baseURL = "http://localhost:8080";

    const paperStyle = {
        padding: '50px 20px',
        width: 'fit-content', // Set the width to fit the content (table)
        margin: '10vh auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '100px',
    };

    const [filter, setFilter] = useState('all'); // Initialize filter state
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const response = await axios.get('/patient_medical_record/findAll');
                setTests(response.data);
            } catch (error) {
                console.error('Error fetching medical tests:', error.response || error);
            }
        };
        fetchTests();
    }, []);

    // Handle filter change
    const handleFilterChange = (event) => {
        const value = event.target.value;
        setFilter(value);

        // Navigate to the corresponding route based on the filter value
        switch (value) {
            case 'all':
                navigate('/medical-records');
                break;
            case 'patient':
                navigate('/patient-medical-records');
                break;
            case 'specific':
                navigate('/specific-patient-record');
                break;
            default:
                navigate('/medical-records');
        }
    };

    // Filter the tests based on the selected filter
    const filteredTests = filter === 'all' ? tests : tests.filter((test) => test.purpose_of_visit === filter);

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <h1>Medical Records</h1>
                    <FormControl variant="outlined" sx={{ minWidth: 200 }}>
                        <InputLabel>Filter</InputLabel>
                        <Select value={filter} onChange={handleFilterChange} label="Filter">
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="patient">Patient Records</MenuItem>
                            <MenuItem value="specific">Specific Patient Records</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div>
                    <Routes>
                        <Route path="/specific-patient-record" element={<SpecificPatientRecord />} />
                        <Route path="/medical-records" element={<MedicalRecords />} />
                        <Route path="/patient-medical-records" element={<PatientMedicalRecords />} />
                    </Routes>

                    <br/>
                    <br/>
                    {filteredTests && filteredTests.length > 0 ? (
                        <table style={{ borderCollapse: 'collapse', width: '100%' ,color:'black'}}>
                            <thead>
                                <tr>
                                    <th style={{ color: 'black',border: '1px solid #ddd', padding: '8px' }}>Patient ID</th>
                                    <th style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>Date of Appointment</th>
                                    <th style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>Doctor ID</th>
                                    <th style={{ color: 'black',border: '1px solid #ddd', padding: '8px' }}>Nurse ID</th>
                                    <th style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>Hospital ID</th>
                                    <th style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>Purpose of Visit</th>
                                    <th style={{ color: 'black',border: '1px solid #ddd', padding: '8px' }}>Past History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTests.map((test) => (
                                    <tr key={test.s_no}>
                                        <td style={{ color: 'black',border: '1px solid #ddd', padding: '8px' }}>{test.patient_id || 'Not available'}</td>
                                        <td style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>{test.date_of_appointment || 'Not available'}</td>
                                        <td style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>{test.doctor_id || 'Not available'}</td>
                                        <td style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>{test.nurse_id || 'Not available'}</td>
                                        <td style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>{test.hospital_id || 'Not available'}</td>
                                        <td style={{ color: 'black',border: '1px solid #ddd', padding: '8px' }}>{test.purpose_of_visit || 'Not available'}</td>
                                        <td style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>{test.past_history || 'Not available'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Medical Records loading...</p>
                    )}
                </div>
            </Paper>
        </Container>
    );
};

const SpecificPatientRecord = () => {
    return <div>Specific Patient Record Page</div>;
};

const PatientMedicalRecords = () => {
    return <div>Patient Medical Records Page</div>;
};

export default MedicalRecords;
