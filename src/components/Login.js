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
        justifyContent: 'center', // Add this line to center-align the buttons
        marginBottom: '100px',
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
                        <h1>Welcome to Care Medi</h1>
                    </div>
                    <br />
                    <br />
                    <div style={{ gap: '16px' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{ margin: '0 10px' }}
                            href="/patient-login"
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
    );
}
