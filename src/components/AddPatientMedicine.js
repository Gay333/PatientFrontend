import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LoadingButton } from '@mui/lab';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import axios from 'axios';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Container, Paper, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';


export default function UserRegistration() {
    const [isError, setIsError] = React.useState(false);
    const [patient_ID, setPatientID] = React.useState('');
    const [medicine_id, setMedicineID] = React.useState('');
    const [purpose, setPurpose] = React.useState('');
    const [timing, setTiming] = React.useState('');
    const [start_date, setStartDate] = React.useState(null);
    const [end_date, setEndDate] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isClicked, setIsClicked] = React.useState(false);
    const [meds, setMeds] = React.useState([]);
    const [patients, setPatients] = React.useState([]);



    const paperStyle={padding: '50px 20px', width: 600, margin: '10vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px'}

    axios.defaults.baseURL = "http://localhost:8080";

  
      const handleClick = () => {
        setIsClicked(true);
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
        if (isClicked && patient_ID && medicine_id && purpose && timing && start_date && end_date) {
            setIsLoading(true);

            const medData = {
                patient_ID,
                medicine_id,
                purpose,
                timing,
                start_date,
                end_date
            };

            console.log(medData);

            axios.post('/medicine_per_patient/addNewMedicine', medData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then(response => {
                console.log("Medicine Record Added!", response.data);
                setIsLoading(false);
            })
            .catch(error => {
              console.log(medData, medicine_id);
                console.error("Error details:", error);
                setIsError(true);
                setIsLoading(false);
            });
        }
    }, [isClicked, patient_ID, medicine_id, purpose, timing, start_date, end_date]);

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Add Medicine Record for Patient</h1>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' } }}
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
                    {meds.length > 0 ? (
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="meds-select-label">Select Medicine</InputLabel>
                            <Select
                                labelId="meds-select-label"
                                id="meds-select"
                                value={medicine_id}
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
                    <TextField
                        error={isError && !purpose}
                        id="outlined-error"
                        label="Enter Purpose of Visit"
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        helperText={isError && !purpose ? "Please enter purpose of Visit" : ""}
                        variant="outlined"
                        fullWidth
                    />

                      <TextField
                        error={isError && !purpose}
                        id="outlined-error"
                        label="Enter Timing of Medicine"
                        value={timing}
                        onChange={(e) => setTiming(e.target.value)}
                        helperText={isError && !purpose ? "Please enter purpose of Visit" : ""}
                        variant="outlined"
                        fullWidth
                    />  
                     <TextField
                        //error={isError && !purpose}
                        id="outlined-error"
                        label="Enter Start Date"
                        type='date'
                        value={start_date}
                        onChange={(e) => setStartDate(e.target.value)}
                        helperText={isError && !purpose ? "Please enter start date" : ""}
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                    />
                     <TextField
                        error={isError && !purpose}
                        id="outlined-error"
                        label="Enter End Date"
                        type='date'
                        value={end_date}
                        onChange={(e) => setEndDate(e.target.value)}
                        helperText={isError && !purpose ? "Please enter end date" : ""}
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        
                    />

                    
                    
                    <LoadingButton
                        loading={isLoading}
                        variant="contained"
                        onClick={handleClick}
                        color='secondary'
                       
                    >
                        <span>Submit</span>
                    </LoadingButton>
                </Box>
            </Paper>
        </Container>
    );
}
