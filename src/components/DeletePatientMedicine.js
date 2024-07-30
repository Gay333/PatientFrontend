import React, { useState } from 'react'
import axios from 'axios'

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';

import { Container, Paper, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';


const DeletePatientMedicine = () => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [tests, setTests] = useState([]);
  const [error, setError] = useState(null)
  axios.defaults.baseURL = "http://localhost:8080";
  const [patient_ID, setPatientID] = useState('');
  const paperStyle={padding: '50px 20px', width: 600, margin: '10vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px'}
  const [medicine_ID, setMedicineID] = useState('');
  const [start_date, setStartDate] = useState('');
  const [timing, setTiming] = useState('');
  const [patients, setPatients] = React.useState([]);
  const [meds, setMeds] = React.useState([]);

  const onDelete = (medicineId) => {
    // Implement the logic to handle the deletion
    // For example, you might want to filter out the deleted medicine from the tests array
    setTests((prevTests) => prevTests.filter((test) => test.medicine_ID !== medicineId));
  };
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
      await axios.delete(`/medicine_per_patient/deleteMedicineRecordPerPatient/${patient_ID}/${start_date}/${medicine_ID}/${timing}`)
      onDelete(medicine_ID)
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
          <h1>Delete Patient's Medicine Record</h1>
          <div style={{ marginBottom: '20px' }}></div>

          <br/>
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

                              <div style={{ marginBottom: '20px' }}></div>
        <TextField
                
                
                        //error={isError && !purpose}
                        id="outlined-error"
                        label="Enter Start Date"
                        type='date'
                        value={start_date}
                        onChange={(e) => setStartDate(e.target.value)}
                        //helperText={isError? "Please enter Start" : ""}
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



export default DeletePatientMedicine
