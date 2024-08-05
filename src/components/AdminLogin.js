/*import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button} from '@mui/material';
import { Password } from '@mui/icons-material';
import {LoadingButton} from '@mui/lab';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
//import axios from axios;
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import bcrypt from 'bcryptjs';


export default function AdminLogin() {
    //const [value, setValue] = React.useState('');
    const [isError, setIsError] = React.useState(false);
    const paperStyle={padding: '50px 20px', width: 600, margin: '20vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }
    const [admin_id, setAdminID] = React.useState('');
    const [password, setPass] = React.useState('');    
    const [isLoading, setIsLoading] = React.useState(false);
    const [Error, setError] = React.useState(false);
    const [encryptedPassword, setEncryptedPass] = React.useState('');
    const navigate = useNavigate();  // Initialize the navigate function
    const [called1, setCalled] = React.useState(false);


    console.log(admin_id);
    function gCipher(text) {
      let result = '';
      for(let i = 0; i < text.length; i++) {
          let ascii = text.charCodeAt(i);
          if((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
              let shifted = ascii + 6;
              if((ascii <= 90 && shifted > 90) || (shifted > 122)) {
                  shifted -= 26;
              }
              result += String.fromCharCode(shifted);
          } else {
              result += text[i];
          }
      }
      return result;
  }
  

  
  
      axios.defaults.baseURL = "http://localhost:8080";
  
      const handleClick = async (event) => {
        if(!called1){
        event.preventDefault();
        setIsLoading(true);
        setError(false);
      
        const password = gCipher(encryptedPassword);
        
        //console.log(encryptedPassword);
        
        try {

            console.log(admin_id,password);
            const response = await axios.post(`/admin/adminlogin/${admin_id}/${password}`, { withCredentials: true });

            if (response.status === 200) {
                console.log("ADMIN",admin_id);
                navigate('/admin-profile');
            } 
        } catch (error) {
            if (error.response && error.response.status === 401) {
                    setError('Invalid credentials');
            }
        }
      }
    };

    /*
    useEffect(() => {
      axios.get('/admin/welcome', { withCredentials: true })
        .then(response => {
          //setMessage(response.data.message); // Assuming response.data has a 'message' field
          //setAdminId(response.data.admin_Id); // Assuming response.data has an 'adminId' field
          console.log("HERE", response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the welcome message!', error);
        });
    }, []);



      return (
        <Container>
          <Paper elevation={3} style={paperStyle}>
          <h1>Admin Login</h1>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
          
        >
          
          <div>
            <TextField
              //error={isError}
              id="outlined-error"
              label="Enter ID"
              value = {admin_id}
              onChange = {(e)=>setAdminID(e.target.value)}
              //helperText = {isError? "Please enter your first name":""}
              variant="outlined"
              //defaultValue="Jane"
              fullWidth
            />
            </div>
            <div style={{ marginBottom: '20px' }}></div>
           
          <div style={{ marginBottom: '20px' }}></div>
            <div>
            <TextField
            
              //error={isError}
              id="outlined-error"
              label="Enter Password"
              value = {encryptedPassword}
              onChange = {(e)=>{setEncryptedPass(e.target.value)}}
              type="password" 
              //helperText = {isError? "Passwords do not match":""}
              variant="outlined"
              //defaultValue="2003-09-15"
              fullWidth
            />
            </div>
          <div style={{ marginBottom: '20px' }}></div>
          <LoadingButton loading={isLoading}
          variant="contained"
          onClick={handleClick} color='secondary' type = 'button'>
            
      <span>Submit</span>
    </LoadingButton>
    {Error && <p>{Error}</p>}
    
        </Box>
        </Paper>
        </Container>
      );
    }

*/
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const [admin_id, setAdminID] = React.useState('');
    console.log(admin_id);
    console.log(window.globalVariable);
    
    const [password, setPass] = React.useState(''); 
    console.log(password);   
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const navigate = useNavigate();

    const paperStyle = {
        padding: '50px 20px',
        width: 600,
        margin: '20vh auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    function gCipher(text) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let ascii = text.charCodeAt(i);
            if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
                let shifted = ascii + 6;
                if ((ascii <= 90 && shifted > 90) || (shifted > 122)) {
                    shifted -= 26;
                }
                result += String.fromCharCode(shifted);
            } else {
                result += text[i];
            }
        }
        return result;
    }

    axios.defaults.baseURL = "http://localhost:8080";

    const handleClick = async (event) => {
        event.preventDefault();
        if (admin_id && password) {
            setIsLoading(true);
            setError(false);

            const encryptedPassword = gCipher(password);

            try {
                console.log("Attempting login with admin_id:", admin_id, "and password:", password);
                const response = await axios.post(`/admin/adminlogin/${admin_id}/${encryptedPassword}`, { withCredentials: true });

                if (response.status === 200) {
                    console.log("ADMIN", admin_id);
                    window.globalVariable = 2;
                    console.log("IN ADMIN",window.globalVariable);
                    navigate('/admin-profile');
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    setError('Invalid credentials');
                }
            } finally {
                setIsLoading(false);
            }
        } else {
            console.log("admin_id or password is missing");
        }
    };

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Admin Login</h1>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="admin-id"
                            label="Enter ID"
                            value={admin_id}
                            onChange={(e) => setAdminID(e.target.value)}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}></div>
                    <div>
                        <TextField
                            id="admin-password"
                            label="Enter Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}></div>
                    <LoadingButton
                        loading={isLoading}
                        variant="contained"
                        onClick={handleClick}
                        color="secondary"
                        type="button"
                    >
                        <span>Submit</span>
                    </LoadingButton>
                    {error && <p>{error}</p>}
                </Box>
            </Paper>
        </Container>
    );
}
