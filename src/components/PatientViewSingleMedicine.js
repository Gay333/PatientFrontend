import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, MenuItem, Select, FormControl, InputLabel, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function PatientViewSingleMedicine(){
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
            sx={{
              '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
             {sessionID ? (
          <p>Click find to see medical charts</p>
        ) : (
          <p>No session ID available. Please log in.</p>
        )}
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
      <h2>Medicine Charts</h2>
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
        <p>No Medicine Charts or Medicine Charts loading...</p>
      )}
    </Box>
  );
};

 
