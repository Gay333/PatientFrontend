/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, MenuItem, Select, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function PatientViewMedic4alRecord(){
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [patient_ID, setPatientID] = useState('');
  const [error, setError] = useState('');
  const [type_of_patient, setType] = useState('');
  const [Date_of_appointment, setDate] = useState('');
  const [patients, setPatients] = useState([]);
  const [isSessionValid, setIsSessionValid] = useState(false);

  axios.defaults.baseURL = "http://localhost:8080";
  const paperStyle = { padding: '50px 20px', width: 600, margin: '10vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px' };

  useEffect(() => {
    // Check session validity
    axios.get('/patient/getID')
      .then(response => {
        if (response.data && response.data.id) {
          console.log(response.data);
          setIsSessionValid(true);
        } else {
          setIsSessionValid(false);
        }
      })
      .catch(error => {
        console.error('Error checking session:', error);
        setIsSessionValid(false);
      });

    // Fetch the list of patients
    axios.get('/patient/findAll')
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
      const response = await axios.get(`/patient_medical_record/findOnePatientRecord/${patient_ID}/${type_of_patient}/${Date_of_appointment}`);
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
      {isSessionValid ? (
        <>
          <Container>
            <Paper elevation={3} style={paperStyle}>
              <h1>Specific Patient Records</h1>
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
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="type-select-label">Select Type of Patient</InputLabel>
                  <Select
                    labelId="type-select-label"
                    id="type-select"
                    value={type_of_patient}
                    onChange={(e) => setType(e.target.value)}
                    label="Select Type of Patient"
                    fullWidth
                  >
                    <MenuItem value="inpatient">Inpatient</MenuItem>
                    <MenuItem value="outpatient">Outpatient</MenuItem>
                  </Select>
                </FormControl>
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
          <Container style={{ margin: '30px auto' }}>
            <h2>Medical Tests</h2>
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
              <p>Medical Records loading...</p>
            )}
          </Container>
        </>
      ) : (
        <p>Session is not valid. Please log in.</p>
      )}
    </div>
  );
};

 
*/

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
      const response = await axios.get(`/patient_medical_record/findPatientRecords/${patient_ID}`);
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
                <TableCell>Type of Patient</TableCell>
                <TableCell>Doctor ID</TableCell>
                <TableCell>Hospital ID</TableCell>
                <TableCell>Purpose of Visit</TableCell>
                <TableCell>Past History</TableCell>
                <TableCell>Nurse ID</TableCell>
                <TableCell>Date of Appointment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tests.map((test) => (
                <TableRow key={test.s_no}>
                  <TableCell>{test.patient_id || 'Not available'}</TableCell>
                  <TableCell>{test.type_of_patient || 'Not available'}</TableCell>
                  <TableCell>{test.doctor_id || 'Not available'}</TableCell>
                  <TableCell>{test.hospital_id || 'Not available'}</TableCell>
                  <TableCell>{test.purpose_of_visit || 'Not available'}</TableCell>
                  <TableCell>{test.past_history || 'Not available'}</TableCell>
                  <TableCell>{test.nurse_id || 'Not available'}</TableCell>
                  <TableCell>{test.date_of_appointment || 'Not available'}</TableCell>
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
