/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Paper, Button} from '@mui/material';
//import { Password } from '@mui/icons-material';
import {LoadingButton} from '@mui/lab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MedicalTests = () => {
  const [tests, setTests] = useState([]);
  axios.defaults.baseURL = "http://localhost:8080";
  const [isLoading, setIsLoading] = React.useState(false);
  const paperStyle={padding:'50px 20px',width:600,margin:"20px auto"}
  const [patient_ID, setPatientID] = React.useState('');

  const handleClick=()=>{
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get(`/patient_medical_record/findPatientRecords/${patient_id}`);
        //console.log(response.data); // Add this line to inspect the data
        setTests(response.data);
      } catch (error) {
        console.error('Error fetching medical tests:', error.response || error);
      }
    };
  
    fetchTests();
  }, []);
};

  return (
    <div>
        <Container>
          <Paper elevation={3} style={paperStyle}>
          <h1>Patient</h1>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
          
        >
          
          <div>
            <TextField
              //error={isError}
              id="outlined-error"
              label="Enter ID"
              value = {patient_ID}
              onChange = {(e)=>setPatientID(e.target.value)}
              //helperText = {isError? "Please enter your first name":""}
              variant="outlined"
              //defaultValue="Jane"
              fullWidth
            />
            </div>
            <div style={{ marginBottom: '20px' }}></div>
            <div style={{ marginBottom: '20px' }}></div>
          <LoadingButton loading={isLoading}
          variant="contained"
          onClick={handleClick} color='secondary'>
      <span>Submit</span>
    </LoadingButton>
    {Error && <p>{Error}</p>}
    
        </Box>
        </Paper>
        </Container>
      <h2>Medical Tests</h2>
      {tests && tests.length > 0 ? (
        <ul>
          {tests.map((test) => (
            <li key={test.s_no}>
            <p>Patient ID: {test.patient_id || 'Not available'}</p>
            <p>Date of Appointment: {test.date_of_appointment || 'Not available'}</p>
            <p>Doctor ID: {test.doctor_id || 'Not available'}</p>
            <p>Nurse ID: {test.nurse_id || 'Not available'}</p>
            <p>Hospital ID: {test.hospital_id || 'Not available'}</p>
            <p>Purpose of the visit: {test.purpose_of_visit || 'Not available'}</p>
            <p>Past History: {test.past_history || 'Not available'}</p>
          </li>
          
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
/*
import React, { useState } from 'react';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import { useEffect } from 'react';



const MedicalTests = () => {
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [patient_ID, setPatientID] = useState('');
  const [error, setError] = useState('');
  const [patients, setPatients] = React.useState([]);


  axios.defaults.baseURL = "http://localhost:8080";
  const paperStyle={padding: '50px 20px', width: 600, margin: '10vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px'}

  const fetchTests = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/patient_medical_record/findPatientRecords/${patient_ID}`);
      setTests(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching medical tests:', error.response || error);
      setError('Error fetching medical tests. Please try again.');
    } finally {
      setIsLoading(false);
    }
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

  const handleClick = () => {
    fetchTests();
  };

  return (
    <div>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Patient Medical Records</h1>
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
            <LoadingButton
              loading={isLoading}
              variant="contained"
              onClick={handleClick}
              color='secondary'
            >
              Find Records
            </LoadingButton>
            {error && <p>{error}</p>}
          </Box>
        </Paper>
      </Container>
      <h2>Medical Records</h2>
      {tests.length > 0 ? (
        <ul>
          {tests.map((test) => (
            <li key={test.s_no}>
            <p>Patient ID: {test.patient_id || 'Not available'}</p>
            <p>Date of Appointment: {test.date_of_appointment || 'Not available'}</p>
            <p>Doctor ID: {test.doctor_id || 'Not available'}</p>
            <p>Nurse ID: {test.nurse_id || 'Not available'}</p>
            <p>Hospital ID: {test.hospital_id || 'Not available'}</p>
            <p>Purpose of the visit: {test.purpose_of_visit || 'Not available'}</p>
            <p>Past History: {test.past_history || 'Not available'}</p>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>No medical tests found or still loading...</p>
      )}
    </div>
  );
};

export default MedicalTests;

*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, MenuItem, Select, FormControl, InputLabel, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const MedicalTests = () => {
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [patient_ID, setPatientID] = useState('');
  const [error, setError] = useState('');
  const [patients, setPatients] = useState([]);

  axios.defaults.baseURL = "http://localhost:8080";
  const paperStyle = { padding: '50px 20px', width: 600, margin: '10vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px' };

  const fetchTests = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/patient_medical_record/findPatientRecords/${patient_ID}`);
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

  return (
    <Box sx={{ margin: '0 30px' }}>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Patient Medical Records</h1>
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
            <LoadingButton
              loading={isLoading}
              variant="contained"
              onClick={handleClick}
              color='secondary'
            >
              Find Records
            </LoadingButton>
            {error && <p>{error}</p>}
          </Box>
        </Paper>
      </Container>
      <h2>Medical Records</h2>
      {tests.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Patient ID</TableCell>
                <TableCell>Date of Appointment</TableCell>
                <TableCell>Doctor ID</TableCell>
                <TableCell>Nurse ID</TableCell>
                <TableCell>Hospital ID</TableCell>
                <TableCell>Purpose of Visit</TableCell>
                <TableCell>Past History</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tests.map((test) => (
                <TableRow key={test.s_no}>
                  <TableCell>{test.patient_id || 'Not available'}</TableCell>
                  <TableCell>{test.date_of_appointment || 'Not available'}</TableCell>
                  <TableCell>{test.doctor_id || 'Not available'}</TableCell>
                  <TableCell>{test.nurse_id || 'Not available'}</TableCell>
                  <TableCell>{test.hospital_id || 'Not available'}</TableCell>
                  <TableCell>{test.purpose_of_visit || 'Not available'}</TableCell>
                  <TableCell>{test.past_history || 'Not available'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>No medical tests found or still loading...</p>
      )}
    </Box>
  );
};

export default MedicalTests;
