import React, { useEffect, useState, useCallback } from 'react';
import { Box, Container, Paper, MenuItem, Select, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState('');
  const [hasFetched, setHasFetched] = useState(false);
  const [patient, setPatient] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const enterance = useCallback(() => {
    if (!hasFetched) {
      setHasFetched(true);
      console.log("Fetching welcome message");

      axios.get('http://localhost:8080/patient/welcome')
        .then(response => {
          setMessage(response.data);
        })
        .catch(error => {
          console.error('Error fetching welcome message:', error);
        });
    

        axios.get('http://localhost:8080/patient/profile')
        .then(response => {
          setPatient(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching profile:', error);
        });
    }
  }, [hasFetched]);
  useEffect(() => {
    console.log("useEffect called");
    enterance();
  }, [enterance]);

  const handleLogout = () => {
    axios.get('http://localhost:8080/patient/patientlogout')
      .then(response => {
        setMessage(response.data);
        window.globalVariable = -1;
        window.location.href = "/";
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <h1>Patient Profile</h1>
      <List>
        
        
        
        
        
            
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/single-patient-medicine">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Single Patient Medicine" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/specific-patient-medicine">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Specific Patient Medicine" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/specific-patient-record">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Specific Patient Record" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/specific-patient-test">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Specific Patient Test" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/patient-medical-records">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Patient Medical Records" />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/patient-medical-tests">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Patient Medical Tests" />
          </ListItemButton>
        </ListItem>
        
        
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <div>{message}</div>
      <Button onClick={handleLogout} variant="contained" color="secondary">Logout</Button>
      {patient ? (
  <TableContainer>
    <Table>
      <TableBody>
      <TableRow key={patient.patient_id}>
                  <TableCell>{patient.patient_id || 'Not available'}</TableCell>
                  <TableCell>{patient.patient_firstname || 'Not available'}</TableCell>
                  <TableCell>{patient.patient_lastname || 'Not available'}</TableCell>
                  <TableCell>{patient.patient_phone || 'Not available'}</TableCell>
                  <TableCell>{patient.occupation || 'Not available'}</TableCell>
                  <TableCell>{patient.patient_dob || 'Not available'}</TableCell>
                  <TableCell>{patient.patient_gender || 'Not available'}</TableCell>
                </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
) : (
  <p>Loading...</p>
)}
      
  
    </div>
  );
}
