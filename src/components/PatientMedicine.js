/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MedicalTests = () => {
  const [tests, setTests] = useState([]);
  axios.defaults.baseURL = "http://localhost:8080";
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('/medicine_per_patient/findAllMedicineRecords');
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
      <h2>Medicine Chart per Patient</h2>
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
        <p>Medicines per patient loading...</p>
      )}
    </div>
  );
};




export default MedicalTests;
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';

const MedicalTests = () => {
  const [tests, setTests] = useState([]);
  const paperStyle = { padding: '50px 20px', width: 800, margin: '10vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px' };

  axios.defaults.baseURL = "http://localhost:8080";

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('/medicine_per_patient/findAllMedicineRecords');
        setTests(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching medical tests:', error.response || error);
      }
    };
  
    fetchTests();
  }, []);
  
  return (
    <Box sx={{ margin: '30px' }}>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Medicine Chart per Patient</h1>
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
            <p>Medicines per patient loading...</p>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default MedicalTests;
