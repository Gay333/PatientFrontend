/*import React, { useEffect, useState } from 'react';
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
  const [Date_of_appointment, setDate] = useState('');
  const [patients, setPatients] = useState([]);

  axios.defaults.baseURL = "http://localhost:8080";
  const paperStyle={padding: '50px 20px', width: 600, margin: '10vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px'}

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

  const fetchTests = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/patient_tests/findParticularTestOfPatient/${patient_ID}/${Date_of_appointment}`);
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
          <h1>Patient</h1>
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
              id="outlined-error"
              label="Enter Date of Appointment"
              type='date'
              value={Date_of_appointment}
              onChange={(e) => setDate(e.target.value)}
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div style={{ marginBottom: '20px' }}></div>
            <LoadingButton
              loading={isLoading}
              variant="contained"
              onClick={handleClick}
              color='secondary'
            >
              Submit
            </LoadingButton>
            {error && <p>{error}</p>}
          </Box>
        </Paper>
      </Container>
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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, MenuItem, Select, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const MedicalTests = () => {
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [patient_ID, setPatientID] = useState('');
  const [error, setError] = useState('');
  const [Date_of_appointment, setDate] = useState('');
  const [patients, setPatients] = useState([]);

  axios.defaults.baseURL = "http://localhost:8080";
  const paperStyle = { padding: '50px 20px', width: 600, margin: '10vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px' };

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

  const fetchTests = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/patient_tests/findParticularTestOfPatient/${patient_ID}/${Date_of_appointment}`);
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
          <h1>Specific Patient Medical Tests</h1>
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
            <TextField
              id="outlined-error"
              label="Enter Date of Appointment"
              type='date'
              value={Date_of_appointment}
              onChange={(e) => setDate(e.target.value)}
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div style={{ marginBottom: '20px' }}></div>
            <LoadingButton
              loading={isLoading}
              variant="contained"
              onClick={handleClick}
              color='secondary'
            >
              Find
            </LoadingButton>
            {error && <p>{error}</p>}
          </Box>
        </Paper>
      </Container>
      <Container style={{ margin: '30px auto' }}>
        <h2>Medical Tests</h2>
        {tests && tests.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Patient ID</TableCell>
                  <TableCell>Date of Appointment</TableCell>
                  <TableCell>Heart Rate</TableCell>
                  <TableCell>Diabetes Pedigree Function</TableCell>
                  <TableCell>Glucose</TableCell>
                  <TableCell>Skin Thickness</TableCell>
                  <TableCell>Insulin</TableCell>
                  <TableCell>Body Mass Index</TableCell>
                  <TableCell>Outcome</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tests.map((test) => (
                  <TableRow key={test.s_no}>
                    <TableCell>{test.patient_ID || 'Not available'}</TableCell>
                    <TableCell>{test.date_of_appointment || 'Not available'}</TableCell>
                    <TableCell>{test.heart_rate || 'Not available'}</TableCell>
                    <TableCell>{test.diabetespedigreefunction || 'Not available'}</TableCell>
                    <TableCell>{test.glucose || 'Not available'}</TableCell>
                    <TableCell>{test.skin_thickness || 'Not available'}</TableCell>
                    <TableCell>{test.insulin || 'Not available'}</TableCell>
                    <TableCell>{test.bmi || 'Not available'}</TableCell>
                    <TableCell>{test.outcome !== undefined ? test.outcome : 'Not available'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <p>Medical Tests loading...</p>
        )}
      </Container>
    </div>
  );
};

export default MedicalTests;
