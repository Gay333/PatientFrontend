import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Container, Paper, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';

const SinglePatientMedicine = () => {
    const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [patient_ID, setPatientID] = useState('');
  const paperStyle={padding: '50px 20px', width: 600, margin: '10vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px'}
  const [error, setError] = useState('');
  const [medicine_ID, setMedicineID] = useState('');
  const [start_date, setStartDate] = useState('');
  const [timing, setTiming] = useState('');
  const [patients, setPatients] = React.useState([]);
  const [meds, setMeds] = React.useState([]);
  //const [end_date, setEndDate] = useState('');
  axios.defaults.baseURL = "http://localhost:8080";
  //

  useEffect(() => {
    axios.get('http://localhost:8080/patient/findAll')
      .then(response => {
        setPatients(response.data);
        console.log('Patients fetched:', response.data);
      })
      .catch(error => {
        console.error('Error fetching patients:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch the list of hospitals
    axios.get('http://localhost:8080/medicine_inventory/findAll')
        .then(response => {
            setMeds(response.data);
        })
        .catch(error => {
            console.error('Error fetching Medicines:', error);
        });
}, []);


  const fetchTests = async () => {
    console.log(start_date);
    try {
      setIsLoading(true);
      const response = await axios.get(`/medicine_per_patient/findParticularMedicine/${patient_ID}/${start_date}/${medicine_ID}/${timing}`);
      setTests(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching medical tests:', error.response || error);
      setError('Error fetching medical tests. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    fetchTests();
  };
  

  return (
    <div>
              <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Specific Medicine of Patient</h1>
          <div style={{ marginBottom: '20px' }}></div>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            {patients.length > 0 ? (
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="patient-select-label">Select Patient</InputLabel>
                            <Select
                                labelId="patient-select-label"
                                id="patient-select"
                                value={patient_ID}
                                onChange={(e) => setPatientID(e.target.value)}
                                label="Select Patient"
                                fullWidth
                            >

                                {patients.map((patient) => (
                                    
                                    <MenuItem key={patient.patient_Id} value={patient.patient_Id}>
                                        {patient.patient_Id}
                                        
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ) : (
                        <p>No patients available</p>
                    )}
                              <div style={{ marginBottom: '20px' }}></div>

           {meds.length > 0 ? (
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="meds-select-label">Select Medicine</InputLabel>
                            <Select
                                labelId="meds-select-label"
                                id="meds-select"
                                value={medicine_ID}
                                onChange={(e) => setMedicineID(e.target.value)}
                                label="Select Medicine"
                                fullWidth
                            >

                                {meds.map((med) => (
                                    
                                    <MenuItem key={med.medicine_id} value={med.medicine_id}>
                                        {med.medicine_id} {med.medicine_name} {med.medicine_purpose}
                                        
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ) : (
                        <p>No patients available</p>
                    )}
                              <div style={{ marginBottom: '20px' }}></div>

                              <TextField
                
                
                //error={isError && !purpose}
                id="outlined-error"
                label="Enter Date of Birth"
                type='date'
                value={start_date}
                onChange={(e) => setStartDate(e.target.value)}
                //helperText={isError? "Please enter DOB" : ""}
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
            />
            <TextField
              id="outlined-error"
              label="Enter timing"
              value={timing}
              onChange={(e) => setTiming(e.target.value)}
              variant="outlined"
              fullWidth
            />
            
            <LoadingButton
              loading={isLoading}
              variant="contained"
              onClick={handleClick}
              color='secondary'
            >
              Find Medicine Chart
            </LoadingButton>
            {error && <p>{error}</p>}
          </Box>
        </Paper>
      </Container>
      <h2>Medical Chart</h2>
      {tests && tests.length > 0 ? (
        <ul>
            
          {tests.map((test) => (
            <li key={test.serial_number}>
            <p>Patient ID: {test.patient_ID || 'Not available'}</p>
            <p>Medicine ID: {test.medicine_ID || 'Not available'}</p>
            <p>Purpse: {test.purpose || 'Not available'}</p>
            <p>Timing: {test.timing || 'Not available'}</p>
            <p>Start Date: {test.start_date || 'Not available'}</p>
            <p>End Date: {test.end_date || 'Not available'}</p>
          </li>
          
          ))}
        </ul>
      ) : (
        <p>Medical Records loading...</p>
      )}
    </div>
  );
};




export default SinglePatientMedicine;
