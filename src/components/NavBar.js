import { AppBar, Button, Typography, Toolbar, Grid, TextField,Container, Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import React from 'react';

const theme = createTheme();
function NavBar(props) {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline />
                <AppBar position='static'>
                    <Container maxWidth="xl">
                        <Toolbar>
                            <Typography
                                variant='h6'
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'center' }}
                            >
                                Track My Tasks
                            </Typography>
                            <Typography
                                variant='h6'
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}
                                
                            >
                                Track My Tasks
                            </Typography>
                            <Button 
                                varinat="contained" 
                                sx={{ 
                                display: 'inline-block',
                                background: '#fff',
                                color: '#000',
                                border: 'none',
                                padding: '10px 20px',
                                margin: '10px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                textDecoration: 'none',
                                fontSize: '15px',
                                fontFamily: 'inherit',
                            }}
                            onClick={() => props.onClick(!props.add)}
                            >
                             {(props.add) ? "Close" : "Add"}
                            </Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}

export default NavBar;