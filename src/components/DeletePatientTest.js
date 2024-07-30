import React, { useState } from 'react';
import axios from 'axios';

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

import { Container, Paper, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';

const MedicalTests = () => {
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [patient_ID, setPatientID] = useState('');
  const [error, setError] = useState('');
  const [Date_of_appointment, setDate] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [patients, setPatients] = React.useState([]);

  axios.defaults.baseURL = "http://localhost:8080";

  axios.defaults.baseURL = "http://localhost:8080";
  const paperStyle={padding: '50px 20px', width: 600, margin: '10vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px'}

  const onDelete = (patient_ID, Date_of_appointment) => {
    // Implement the logic to handle the deletion
    // For example, you might want to filter out the deleted medicine from the tests array
    setTests((prevTests) => prevTests.filter((test) => test.patient_ID !== patient_ID && test.Date_of_appointment !== Date_of_appointment));
  };

  useEffect(() => {
    // Fetch the list of hospitals
    axios.get('http://localhost:8080/patient/findAll')
        .then(response => {
            setPatients(response.data);
            console.log('Patients fetched:', response.data);
        console.log('Patients state:', patients, patients.length); 
        })
        .catch(error => {
            console.error('Error fetching patients:', error);
        });
}, []);
  
  const handleDelete = async () => {
    setIsDeleting(true)
    setError(null)

    try {
      await axios.delete(`/patient_tests/deleteParticularTest/${patient_ID}/${Date_of_appointment}`)
      onDelete(patient_ID, Date_of_appointment)
    } catch (err) {
      setError('Failed to delete medicine. Please try again.')
      console.error('Error deleting medicine:', err)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div>
              <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Delete Patient's Test</h1>
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

<TextField
                
                
                //error={isError && !purpose}
                id="outlined-error"
                label="Enter Date of Appointment"
                type='date'
                value={Date_of_appointment}
                onChange={(e) => setDate(e.target.value)}
                //helperText={isError? "Please enter Date of Appointment" : ""}
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
            />
            <LoadingButton
              loading={isLoading}
              variant="contained"
              onClick={handleDelete}
              color='secondary'
              
            >
            {isDeleting ? 'Deleting...' : 'Delete Medicine'}
              
            </LoadingButton>
            {error && <p className="error">{error}</p>}
          </Box>
        </Paper>
      </Container>
    </div>
  );
};




export default MedicalTests;
