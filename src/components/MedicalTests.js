/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MedicalTests = () => {
  const [tests, setTests] = useState([]);
  axios.defaults.baseURL = "http://localhost:8080";
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('/patient_tests/findAll');
        //console.log(response.data); // Add this line to inspect the data
        setTests(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching medical tests:', error.response || error);
      }
    };
  
    fetchTests();
  }, []);
  

  return (
    <div>
      <h2>Medical Tests</h2>
      {tests && tests.length > 0 ? (
        <ul>
            
          {tests.map((test) => (
            <li key={test.s_no}>
            <p>Patient ID: {test.patient_ID || 'Not available'}</p>
            <p>Date of Appointment: {test.date_of_appointment || 'Not available'}</p>
            <p>Heart Rate: {test.heart_rate || 'Not available'}</p>
            <p>Diabetes Pedigree Function: {test.diabetespedigreefunction || 'Not available'}</p>
            <p>Glucose: {test.glucose || 'Not available'}</p>
            <p>Skin Thickness: {test.skin_thickness || 'Not available'}</p>
            <p>Insulin: {test.insulin || 'Not available'}</p>
            <p>Body Mass Index: {test.bmi || 'Not available'}</p>
            <p>Outcome: {test.outcome !== undefined ? test.outcome : 'Not available'}</p>          </li>
          
          ))}
        </ul>
      ) : (
        <p>Medical Records loading...</p>
      )}
    </div>
  );
};

export default MedicalTests;
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Paper, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import necessary components

const MedicalTests = () => {
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
                const response = await axios.get('/patient_tests/findAll');
                setTests(response.data);
                console.log(response.data);
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
                navigate('/medical-tests');
                break;
            case 'patient':
                navigate('/patient-medical-tests');
                break;
            case 'specific':
                navigate('/specific-patient-test');
                break;
            default:
                navigate('/medical-tests');
        }
    };

    // Filter the tests based on the selected filter
    const filteredTests = filter === 'all' ? tests : tests.filter((test) => test.purpose_of_visit === filter);

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <h1>Medical Tests</h1>
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
                        <Route path="/medical-tests" element={<MedicalTests />} />
                        <Route path="/patient-medical-tests" element={<PatientMedicalTests />} />
                        <Route path="/specific-patient-test" element={<SpecificPatientTest />} />
                    </Routes>
                    <br />
                    <br />
                    {filteredTests && filteredTests.length > 0 ? (
                        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                            <thead>
                                <tr>
                                    <th style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>Patient ID</th>
                                    <th style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>Date of Appointment</th>
                                    <th style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>Heart Rate</th>
                                    <th style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>Diabetes Pedigree Function</th>
                                    <th style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>Glucose</th>
                                    <th style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>Skin Thickness</th>
                                    <th style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>Insulin</th>
                                    <th style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>Body Mass Index</th>
                                    <th style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>Outcome</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTests.map((test) => (
                                    <tr key={test.s_no}>
                                        <td style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>{test.patient_ID || 'Not available'}</td>
                                        <td style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>{test.date_of_appointment || 'Not available'}</td>
                                        <td style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>{test.heart_rate || 'Not available'}</td>
                                        <td style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>{test.diabetespedigreefunction || 'Not available'}</td>
                                        <td style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>{test.glucose || 'Not available'}</td>
                                        <td style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>{test.skin_thickness || 'Not available'}</td>
                                        <td style={{color: 'black', border: '1px solid #ddd', padding: '8px' }}>{test.insulin || 'Not available'}</td>
                                        <td style={{ color: 'black',border: '1px solid #ddd', padding: '8px' }}>{test.bmi || 'Not available'}</td>
                                        <td style={{ color: 'black',border: '1px solid #ddd', padding: '8px' }}>{test.outcome !== undefined ? test.outcome : 'Not available'}</td>
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

const PatientMedicalTests = () => {
    return <div>Patient Medical Tests Page</div>;
};

const SpecificPatientTest = () => {
    return <div>Specific Patient Test Page</div>;
};

export default MedicalTests;
