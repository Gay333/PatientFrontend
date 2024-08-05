import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true;

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [hasFetched, setHasFetched] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const enterance = useCallback(() => {
    if (!hasFetched) {
      setHasFetched(true);
      console.log("Fetching welcome message");

      axios.get('http://localhost:8080/admin/welcome')
        .then(response => {
          setMessage(response.data);
        })
        .catch(error => {
          console.error('Error fetching welcome message:', error);
        });
    }
  }, [hasFetched]);

  useEffect(() => {
    console.log("useEffect called");
    enterance();
  }, [enterance]);

  const handleLogout = () => {
    axios.get('http://localhost:8080/admin/adminlogout')
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
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/nurse-addition">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Nurse Addition" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/delete-patient-medicine">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Delete Patient Medicine" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/delete-patient-record">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Delete Patient Record" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/delete-patient-test">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Delete Patient Test" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/all-patient-medicine">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="All Patient Medicine" />
          </ListItemButton>
        </ListItem>
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
          <ListItemButton component={Link} to="/add-patient-record">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Patient Record" />
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding>
          <ListItemButton component={Link} to="/add-patient-test">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Patient Test" />
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding>
          <ListItemButton component={Link} to="/add-patient-medicine">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Patient Medicine" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <div>{message}</div>
      <Button onClick={handleLogout} variant="contained" color="secondary">Logout</Button>
    </div>
  );
}
