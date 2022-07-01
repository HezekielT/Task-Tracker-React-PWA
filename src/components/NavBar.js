import { AppBar, Typography, Toolbar, Grid, TextField,Container, Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
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
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}

export default NavBar;