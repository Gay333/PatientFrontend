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
    const [patient_id, setPatientID] = React.useState('');
    const [type_of_patient, setType] = React.useState('');
    const [purpose_of_visit, setPurpose] = React.useState('');
    const [past_history, setPast] = React.useState('');
    const [doctor_id, setDoctor] = React.useState('');
    const [nurse_id, setNurse] = React.useState('');
    const [hospital_id, setHos] = React.useState('');
    const [time_of_visit, setTiming] = React.useState('');
    const [date_of_appointment, setDate] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isClicked, setIsClicked] = React.useState(false);
    const [hospitals, setHospitals] = React.useState([]);
    const [nurses, setNurses] = React.useState([]);
    const [doctors, setDoctors] = React.useState([]);
    const [patients, setPatients] = React.useState([]);
    
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };

    axios.defaults.baseURL = "http://localhost:8080";

  
      const handleClick = () => {
        setIsClicked(true);
    };
    useEffect(() => {
        // Fetch the list of hospitals
        axios.get('http://localhost:8080/hospital/findAllHospitals')
            .then(response => {
                setHospitals(response.data);
            })
            .catch(error => {
                console.error('Error fetching hospitals:', error);
            });
    }, []);

    useEffect(() => {
        // Fetch the list of hospitals
        axios.get('http://localhost:8080/nurse/findAll')
            .then(response => {
                setNurses(response.data);
                //console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching nurses:', error);
            });
    }, []);


    useEffect(() => {
        // Fetch the list of hospitals
        axios.get('http://localhost:8080/doctor/findAll')
            .then(response => {
                setDoctors(response.data);
            })
            .catch(error => {
                console.error('Error fetching doctors:', error);
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


    //console.log("Here",patients);
  

    useEffect(() => {
        if (isClicked && patient_id && type_of_patient && purpose_of_visit && past_history && doctor_id && nurse_id && time_of_visit && hospital_id && date_of_appointment) {
            setIsLoading(true);

            const medData = {
                patient_id,
                type_of_patient,
                purpose_of_visit,
                past_history,
                doctor_id,
                nurse_id,
                time_of_visit,
                hospital_id,
                date_of_appointment
            };

            console.log(medData);

            axios.post('/patient_medical_record/addNewRecord', medData, {
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
    }, [isClicked, patient_id, type_of_patient, purpose_of_visit, past_history, doctor_id, nurse_id, time_of_visit, hospital_id, date_of_appointment]);
    
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Add Patient Record</h1>
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
                                value={patient_id}
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

                     <FormControl fullWidth variant="outlined">
                        <InputLabel id="doctor-select-label">Select Doctor</InputLabel>
                        <Select
                            labelId="doctor-select-label"
                            id="doctor-select"
                            value={doctor_id}
                            onChange={(e) => setDoctor(e.target.value)}
                            label="Select Doctor"
                            fullWidth
                        >
                            {doctors.map((doctor) => (
                                <MenuItem key={doctor.doctor_id} value={doctor.doctor_id}>
                                    {doctor.doctor_id} {doctor.doctor_firstname} {doctor.doctor_lastname}
                                </MenuItem>
                            ))}
                            
                        </Select>
                    </FormControl>
                    <div style={{ marginBottom: '20px' }}></div>
                     <FormControl fullWidth variant="outlined">
                        <InputLabel id="nurse-select-label">Select Nurse</InputLabel>
                        <Select
                            labelId="nurse-select-label"
                            id="nurse-select"
                            value={nurse_id}
                            onChange={(e) => setNurse(e.target.value)}
                            label="Select Nurse"
                            fullWidth
                        >
                            {nurses.map((nurse) => (
                                <MenuItem key={nurse.nurse_id} value={nurse.nurse_id}>
                                    {nurse.nurse_id} {nurse.nurse_firstname} {nurse.nurse_lastname}
                                </MenuItem>
                            ))}
                            
                        </Select>
                    </FormControl>
                    <div style={{ marginBottom: '20px' }}></div>
                     <FormControl fullWidth variant="outlined">
                        <InputLabel id="hospital-select-label">Select Hospital</InputLabel>
                        <Select
                            labelId="hospital-select-label"
                            id="hospital-select"
                            value={hospital_id}
                            onChange={(e) => setHos(e.target.value)}
                            label="Select Hospital"
                            fullWidth
                        >
                            {hospitals.map((hospital) => (
                                <MenuItem key={hospital.hospital_id} value={hospital.hospital_id}>
                                    {hospital.hospital_name}
                                </MenuItem>
                            ))}
                            
                        </Select>
                    </FormControl>
                    <div style={{ marginBottom: '20px' }}></div>
                    <TextField
                       // error={isError && !purpose}
                        id="outlined-error"
                        label="Enter Purpose of Visit"
                        value={purpose_of_visit}
                        onChange={(e) => setPurpose(e.target.value)}
                        helperText={isError && !purpose_of_visit ? "Please enter purpose of Visit" : ""}
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        //error={isError && !purpose}
                        id="outlined-error"
                        label="Enter Any past history"
                        value={past_history}
                        onChange={(e) => setPast(e.target.value)}
                        helperText={isError && !past_history ? "Please enter past history" : ""}
                        variant="outlined"
                        fullWidth
                    />

                      <TextField
                        //error={isError && !purpose}
                        id="outlined-error"
                        label="Enter Timing"
                        value={time_of_visit}
                        onChange={(e) => setTiming(e.target.value)}
                        helperText={isError && !time_of_visit ? "Please enter timing of Visit" : ""}
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
