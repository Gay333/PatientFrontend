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

export default function AddPatientRecord() {
    const [isError, setIsError] = React.useState(false);
    const [patient_ID, setPatientID] = React.useState('');
    const [heart_rate, setHeart] = React.useState('');
    const [diabetespedigreefunction, setDPF] = React.useState('');
    const [glucose, setGlucose] = React.useState('');
    const [blood_pressure, setBP] = React.useState('');
    const [skin_thickness, setST] = React.useState('');
    const [insulin, setInsulin] = React.useState('');
    const [outcome, setOutcome] = React.useState('');
    const [bmi, setBMI] = React.useState('');
    const [date_of_appointment, setDate] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isClicked, setIsClicked] = React.useState(false);
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
        if (isClicked && patient_ID && heart_rate && diabetespedigreefunction && glucose && blood_pressure && skin_thickness && insulin && bmi && date_of_appointment &&outcome) {
            setIsLoading(true);

            const medData = {
                patient_ID,
                heart_rate,
                diabetespedigreefunction,
                glucose,
                blood_pressure,
                skin_thickness,
                insulin,
                bmi,
                date_of_appointment,
                outcome

            };

            console.log(medData);

            axios.post('/patient_tests/addNewTest', medData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then(response => {
                console.log("Patient Record Added!", response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error details:", error);
                setIsError(true);
                setIsLoading(false);
            });
        }
    }, [isClicked, patient_ID, heart_rate, diabetespedigreefunction, glucose, blood_pressure, skin_thickness, insulin, bmi, date_of_appointment, outcome]);

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Add Patient Test</h1>
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
                    <div style={{ marginBottom: '20px' }}></div>
                    <TextField
                        //error={isError && !medicine_id}
                        id="outlined-error"
                        label="Enter heart rate of patient"
                        value={heart_rate}
                        onChange={(e) => setHeart(e.target.value)}
                        helperText={isError && !heart_rate? "Please enter heart rate of patient" : ""}
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        //error={isError && !patient_ID}
                        id="outlined-error"
                        label="Enter value of Diabetes Pedigree Function"
                        value={diabetespedigreefunction}
                        onChange={(e) => setDPF(e.target.value)}
                        helperText={isError && !diabetespedigreefunction ? "Please enter value for Diabetes Pedigree Function" : ""}
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        //error={isError && !patient_ID}
                        id="outlined-error"
                        label="Enter glucose"
                        value={glucose}
                        onChange={(e) => setGlucose(e.target.value)}
                        helperText={isError && !glucose ? "Please enter glucose" : ""}
                        variant="outlined"
                        fullWidth
                    />

                    <TextField
                        //error={isError && !patient_ID}
                        id="outlined-error"
                        label="Enter blood pressure"
                        value={blood_pressure}
                        onChange={(e) => setBP(e.target.value)}
                        helperText={isError && !blood_pressure ? "Please enter blood pressure" : ""}
                        variant="outlined"
                        fullWidth
                    />

                    <TextField
                        //error={isError && !patient_ID}
                        id="outlined-error"
                        label="Enter skin thickness"
                        value={skin_thickness}
                        onChange={(e) => setST(e.target.value)}
                        helperText={isError && !skin_thickness ? "Please enter skin thickness" : ""}
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        //error={isError && !patient_ID}
                        id="outlined-error"
                        label="Enter insulin"
                        value={insulin}
                        onChange={(e) => setInsulin(e.target.value)}
                        helperText={isError && !insulin ? "Please enter insulin" : ""}
                        variant="outlined"
                        fullWidth
                    />

                    <TextField
                        //error={isError && !patient_ID}
                        id="outlined-error"
                        label="Enter bmi"
                        value={bmi}
                        onChange={(e) => setBMI(e.target.value)}
                        helperText={isError && !bmi ? "Please enter bmi" : ""}
                        variant="outlined"
                        fullWidth
                    />

                    <TextField
                        //error={isError && !patient_ID}
                        id="outlined-error"
                        label="Enter outcome"
                        value={outcome}
                        onChange={(e) => setOutcome(e.target.value)}
                        helperText={isError && !outcome ? "Please enter outcome" : ""}
                        variant="outlined"
                        fullWidth
                    />
                    
                     <TextField
                        //error={isError && !purpose}
                        id="outlined-error"
                        label="Enter Date of Appointment"
                        type='date'
                        value={date_of_appointment}
                        onChange={(e) => setDate(e.target.value)}
                        helperText={isError && !date_of_appointment ? "Please enter date of appointment" : ""}
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
