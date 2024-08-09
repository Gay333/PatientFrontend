/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, MenuItem, Select, FormControl, InputLabel, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const SinglePatientMedicine = () => {
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [patient_ID, setPatientID] = useState('');
  const [error, setError] = useState('');
  const [patients, setPatients] = useState([]);

  axios.defaults.baseURL = "http://localhost:8080";
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };

  const fetchTests = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/medicine_per_patient/findAllMedicinesForPatient/${patient_ID}`);
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
    axios.get('http://localhost:8080/patient/findAll')
      .then(response => {
        setPatients(response.data);
        console.log('Patients fetched:', response.data);
      })
      .catch(error => {
        console.error('Error fetching patients:', error);
      });
  }, []);

  const handleClick = () => {
    fetchTests();
  };

  return (
    <Box sx={{ margin: '0 30px' }}>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Patient Medicine Charts</h1>
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
              Find
            </LoadingButton>
            {error && <p>{error}</p>}
          </Box>
        </Paper>
      </Container>
      <h2>Medical Tests</h2>
      {tests && tests.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Patient ID</TableCell>
                <TableCell>Medicine ID</TableCell>
                <TableCell>Purpose</TableCell>
                <TableCell>Timing</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tests.map((test) => (
                <TableRow key={test.serial_number}>
                  <TableCell>{test.patient_ID || 'Not available'}</TableCell>
                  <TableCell>{test.medicine_ID || 'Not available'}</TableCell>
                  <TableCell>{test.purpose || 'Not available'}</TableCell>
                  <TableCell>{test.timing || 'Not available'}</TableCell>
                  <TableCell>{test.start_date || 'Not available'}</TableCell>
                  <TableCell>{test.end_date || 'Not available'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>Medical Records loading...</p>
      )}
    </Box>
  );
};

export default SinglePatientMedicine;

*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, MenuItem, Select, FormControl, InputLabel, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const SinglePatientMedicine = () => {
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [patient_ID, setPatientID] = useState('');
  const [error, setError] = useState('');
  const [patients, setPatients] = useState([]);

  axios.defaults.baseURL = "http://localhost:8080";
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };

  const fetchTests = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/medicine_per_patient/findAllMedicinesForPatient/${patient_ID}`);
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
    axios.get('http://localhost:8080/patient/findAll')
      .then(response => {
        setPatients(response.data);
        console.log('Patients fetched:', response.data);
      })
      .catch(error => {
        console.error('Error fetching patients:', error);
      });
  }, []);

  const handleClick = () => {
    fetchTests();
  };

  return (
    <Box sx={{ margin: '0 30px' }}>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Patient Medicine Charts</h1>
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
              Find
            </LoadingButton>
            {error && <p>{error}</p>}
          </Box>
        </Paper>
      </Container>
      <h2>Medical Tests</h2>
      {tests && tests.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Patient ID</TableCell>
                <TableCell>Medicine ID</TableCell>
                <TableCell>Purpose</TableCell>
                <TableCell>Timing</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tests.map((test) => (
                <TableRow key={test.serial_number}>
                  <TableCell>{test.patient_ID || 'Not available'}</TableCell>
                  <TableCell>{test.medicine_id || 'Not available'}</TableCell>
                  <TableCell>{test.purpose || 'Not available'}</TableCell>
                  <TableCell>{test.timing || 'Not available'}</TableCell>
                  <TableCell>{test.start_date || 'Not available'}</TableCell>
                  <TableCell>{test.end_date || 'Not available'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>Medical Records loading...</p>
      )}
    </Box>
  );
};

export default SinglePatientMedicine;
