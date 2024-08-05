/*import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function PatientLogin() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center'};
    const [isError, setIsError] = React.useState(false);
    const [patient_phone, setPhone] = React.useState('');
    const [patient_firstName, setFirstName] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const navigate = useNavigate();
   

    const handleClick = async (event) => {
        setIsLoading(true);
        // Simulate an API call or some async operation
        setTimeout(() => {
            setIsLoading(false);
            navigate('/profile');
        }, 2000); // Simulate a delay of 2 seconds
    };

    return (
        
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    

                    <div>
                    
                        <h1 style={{ textAlign: 'center' }}>Login</h1>
                    
                        <TextField
                            id="outlined-error"
                            label="Patient Phone Number"
                            value={patient_phone}
                            onChange={(e) => setPhone(e.target.value)}
                            helperText={isError ? "Please enter your phone number" : ""}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <TextField
                        id="outlined-error"
                        label="OTP Received"
                        value={patient_firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        helperText={isError ? "Please enter the OTP" : ""}
                        variant="outlined"
                        fullWidth
                    />
                    <div style={{ marginBottom: '20px' }}></div>
                    <LoadingButton
                        loading={isLoading}
                        variant="contained"
                        onClick={handleClick}
                        color='secondary'
                    >
                        <span>Login</span>
                    </LoadingButton>
                    <br/>
                    <br/>
                    <p style={{ textAlign: 'center', color: '#133C55' }}>
                     <Link to="/register">No Account? Sign up</Link>
                </p>
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
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function PatientLogin() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20vh auto', display: 'flex', flexDirection: 'column', alignItems: 'center' };
    const [isError, setIsError] = React.useState(false);
    const [patient_phone, setPhone] = React.useState('');
    const [patient_firstName, setFirstName] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const navigate = useNavigate();

    const handleClick = async (event) => {
        setIsLoading(true);
        // Simulate an API call or some async operation
        setTimeout(() => {
            setIsLoading(false);
            navigate('/profile');
        }, 2000); // Simulate a delay of 2 seconds
    };

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <h1 style={{ textAlign: 'center' }}>Login</h1>
                        <TextField
                            id="outlined-error"
                            label="Patient Phone Number"
                            value={patient_phone}
                            onChange={(e) => setPhone(e.target.value)}
                            helperText={isError ? "Please enter your phone number" : ""}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <TextField
                        id="outlined-error"
                        label="OTP Received"
                        value={patient_firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        helperText={isError ? "Please enter the OTP" : ""}
                        variant="outlined"
                        fullWidth
                    />
                    <div style={{ marginBottom: '20px' }}></div>
                    <LoadingButton
                        loading={isLoading}
                        variant="contained"
                        onClick={handleClick}
                        color='secondary'
                    >
                        <span>Login</span>
                    </LoadingButton>
                    <br />
                    <br />
                    <p style={{ textAlign: 'center', color: '#133C55', display: 'block' }}>
                        <Link to="/registration" style={{ color: 'inherit', textDecoration: 'none' }}>No account? Sign up</Link>
                    </p>
                </Box>
            </Paper>
        </Container>
    );
}
