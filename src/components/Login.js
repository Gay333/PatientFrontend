import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Paper, Button } from '@mui/material';

export default function Login() {
    const paperStyle = {
        padding: '50px 20px',
        width: 600,
        margin: '10vh auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '100px',
        marginRight: '100px',
        marginLeft: '300px',
    };

    const backgroundStyle = {
        backgroundImage: `url('https://media.istockphoto.com/id/1573747294/vector/medical-seamless-pattern-with-yellow-blue-and-white-medicines-and-vitamins-on-a-pastel-blue.jpg?s=612x612&w=0&k=20&c=D-N3SroWVhTXRxjTEGPC9xX0mQh-2WZaETLSeKRtyKw=')`,
        //backgroundColor: '#84D2F6',
        height: '99vh',
        width: '99vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', // Prevents side scroll
    };

    return (
        <div style={backgroundStyle}>
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
                            <h1>Welcome to Care Medi</h1>
                        </div>
                        <br />
                        <br />
                        <div style={{ gap: '16px', marginLeft:'60px' }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{ margin: '0 10px' }}
                                href="/OTP-Login"
                            >
                                Patient
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{ margin: '0 10px' }}
                                href="/nurse-login"
                            >
                                Nurse
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{ margin: '0 10px' }}
                                href="/admin-login"
                            >
                                Admin
                            </Button>
                        </div>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}
