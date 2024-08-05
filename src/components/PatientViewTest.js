import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import { Box, Container, Paper, MenuItem, Select, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const PatientViewSingleMedicine = () => {
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [patient_ID, setPatientID] = useState('');
  const [error, setError] = useState('');
  const [patients, setPatients] = useState([]);
  const [sessionID, setSessionID] = useState(null);

  axios.defaults.baseURL = "http://localhost:8080";
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };

  const fetchTests = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/patient_tests/findTestsForPatient/${patient_ID}`);
      console.log(response.data);
      setTests(response.data);
      console.log(tests);
      setError('');
    } catch (error) {
      console.error('Error fetching medical tests:', error.response || error);
      setError('Error fetching medical tests. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    console.log("HE",tests);
  }, [tests]);

  useEffect(() => {
    const fetchSessionID = async () => {
      try {
        const response = await axios.get('/patient/getID');
        console.log('Session ID response:', response.data); // Debugging log
        //if (response.data && response.data.sessionID) {
          setSessionID(response.data);
        //} else {
          //console.error('Session ID not found in response:', response.data);
        //}
      } catch (error) {
        console.error('Error fetching session ID:', error);
      }
    };

    fetchSessionID();

    axios.get('/patient/findAll')
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

  useEffect(()=>{
    if (sessionID) {
      setPatientID(sessionID);
    }
  })
  

  return (
    <Box sx={{ margin: '0 30px' }}>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Patient Medicine Charts</h1>
          <div style={{ marginBottom: '20px' }}></div>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' } }}
            noValidate
            autoComplete="off"
          >
            {sessionID ? (
          <p>Click find to see medical records</p>
        ) : (
          <p>No session ID available. Please log in.</p>
        )}
        <div style={{ marginBottom: '20px' }}></div>
            <div style={{ marginBottom: '20px' }}></div>
            <LoadingButton
              loading={isLoading}
              variant="contained"
              onClick={handleClick}
              color='secondary'
              disabled={!sessionID}
            >
              Find
            </LoadingButton>
            {error && <p>{error}</p>}
          </Box>
        </Paper>
      </Container>
      <h2>Medical Records</h2>
      {tests && tests.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>Patient ID</TableCell>
                <TableCell>Heart Rate</TableCell>
                <TableCell>Diabetes Pedigree Function</TableCell>
                <TableCell>Glucose</TableCell>
                <TableCell>Blood Pressure</TableCell>
                <TableCell>Skin Thickness</TableCell>
                <TableCell>Insulin</TableCell>
                <TableCell>BMI</TableCell>
                <TableCell>Outcome</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tests.map((test) => (
                <TableRow key={test.s_no}>
                  <TableCell>{test.patient_ID || 'Not available'}</TableCell>
                  <TableCell>{test.heart_rate || 'Not available'}</TableCell>
                  <TableCell>{test.diabetespedigreefunction || 'Not available'}</TableCell>
                  <TableCell>{test.glucose || 'Not available'}</TableCell>
                  <TableCell>{test.blood_pressure || 'Not available'}</TableCell>
                  <TableCell>{test.skin_thickness || 'Not available'}</TableCell>
                  <TableCell>{test.insulin || 'Not available'}</TableCell>
                  <TableCell>{test.bmi || 'Not available'}</TableCell>
                  <TableCell>{test.outcome || 'Not available'}</TableCell>
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

export default PatientViewSingleMedicine;
