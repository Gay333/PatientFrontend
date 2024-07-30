import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import { Password } from '@mui/icons-material';
import {LoadingButton} from '@mui/lab';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
//import axios from axios;
import axios from 'axios';
//import bcrypt from 'bcryptjs';
import { Container, Paper, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';


export default function NurseAddition() {
    //const [value, setValue] = React.useState('');
    const [isError, setIsError] = React.useState(false);
    const paperStyle={padding: '50px 20px', width: 600, margin: '10vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px'}
    const [nurse_firstname, setFirstName] = React.useState('');
    const [nurse_lastname, setLastName] = React.useState('');
    const [nurse_phone, setPhone] = React.useState('');
    const [nurse_address, setAddress] = React.useState('');
    const [nurse_id, setNurseID] = React.useState('');
    const [password, setPass] = React.useState('');
    const [checkPass, setCheckPass] = React.useState('');
    const [hospital_id, setHos] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const bcrypt = require('bcryptjs');
    const [result, useResult] = React.useState('');
    const [hospitals, setHospitals] = React.useState([]);
    const [isClicked, setIsClicked] = React.useState(false);
    const [nurses, setNurses] = React.useState([]);
    axios.defaults.baseURL = "http://localhost:8080";

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


      
  
     const handleClick = () => {setIsClicked(true)};
      
      useEffect(() => {
        
        if (isClicked&&nurse_id&&nurse_firstname&&nurse_lastname&&hospital_id&&nurse_phone) {
          setIsLoading(true);
          const nurseData = {
               nurse_firstname,        nurse_lastname,       hospital_id, nurse_phone};
          axios.post(`http://localhost:8080/nurse/updateNurse/${nurse_id}`, nurseData, {
            params: {
                hospital_id: hospital_id,
                nurse_phone: nurse_phone,
                nurse_firstname: nurse_firstname,
                nurse_lastname: nurse_lastname
            },
            headers: {
              'Content-Type': 'application/json'        },      
              withCredentials: true
            })      .then(response => {
              if (response.headers['content-type'].includes('text/html')) {
                throw new Error('Received HTML response instead of JSON');
              }
              console.log("Nurse Added!", response.data);
              setIsLoading(false);
            })
      .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .catch(error => {
              console.error("Error details:", error);
              if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
              } else if (error.request) {
                console.error("No response received:", error.request);
              } else {
                console.error("Error message:", error.message);
              }
              setIsError(true);
              setIsLoading(false);
            });
        }
      }, [ isClicked, nurse_id,        nurse_firstname,        nurse_lastname,       hospital_id, nurse_phone]);
  
    

    /*
      const handleit = () => {
        setIsClicked(true);
        setIsLoading(true);
        handleClick();
    }
      const handleClick = () => {
        
        const nurseData = {
            nurse_firstname,
            nurse_lastname,
            hospital_id,
            nurse_phone,
        };
        console.log(isClicked, nurseData);
        if(isClicked&&nurse_id&&nurse_firstname&&nurse_lastname&&nurse_phone&&hospital_id){
            const nurseData = {
                nurse_firstname,
                nurse_lastname,
                hospital_id,
                nurse_phone,
            };
        


        axios.post(`http://localhost:8080/nurse/updateNurse/${nurse_id}`, nurseData, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        .then(response => {
            console.log("Nurse Added!", response.data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error("Error details:", error);
            setIsLoading(false);
        });
    }
    };

*/
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
      <h1>Update Nurse Profile</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      
    >
      
      <div>
      <div style={{ marginBottom: '20px' }}></div>
      <FormControl fullWidth variant="outlined">
                        <InputLabel id="nurse-select-label">Select Nurse</InputLabel>
                        <Select
                            labelId="nurse-select-label"
                            id="nurse-select"
                            value={nurse_id}
                            onChange={(e) => setNurseID(e.target.value)}
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
        <TextField
          //error={isError}
          id="outlined-error"
          label="Enter Nurse First Name"
          value = {nurse_firstname}
          onChange = {(e)=>setFirstName(e.target.value)}
          variant="outlined"
          fullWidth
        />
        </div>
        <div style={{ marginBottom: '20px' }}></div>
        <div>
        <TextField
          id="outlined-error"
          label="Enter Nurse Last Name"
          value = {nurse_lastname}
          onChange = {(e)=>setLastName(e.target.value)}
          variant="outlined"
          fullWidth
        />
        </div>
        <div style={{ marginBottom: '20px' }}></div>
        <TextField
          id="outlined-error"
          label="Enter Nurse Phone Number"
          value = {nurse_phone}
          onChange = {(e)=>setPhone(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <div style={{ marginBottom: '20px' }}></div>
        <div>
        </div>
        <div style={{ marginBottom: '20px' }}></div>
        <div style={{ marginBottom: '20px' }}></div>
        <div>
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

      
        
      </div>
      <div style={{ marginBottom: '20px' }}></div>
      <LoadingButton loading={isLoading}
      variant="contained"
      onClick={handleClick} color='secondary'>
  <span>Submit</span>
</LoadingButton>


    </Box>
    </Paper>
    </Container>
  );
}
