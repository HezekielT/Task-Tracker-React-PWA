import React from 'react';

import { Container, 
    Typography, Grid, 
    TextField, Box, 
    CssBaseline, ThemeProvider, 
    createTheme, Paper, Button } from "@mui/material"
const theme = createTheme();

function TaskHeader(props) {
    return (
       <React.Fragment> 
      <CssBaseline />
      <Box
          component="main"
          sx={{
              backgroundColor: (theme) =>
              theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
              flexGrow: 1,
              height: '83.6vh',
              overflow: 'auto'
          }}
      >
          {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4,}}> */}
          <Paper
            md={12} lg={12} xl={12} xs={12}
              sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  my:8, 
                  mx: 4,
              }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6} md={9} lg={9}>

            <Typography 
              component="h1" 
              variant="h4" 
              sx={{
                // flexGrow: 1, 
                // m: 3, 
                textAlign: 'center'
              }}
              >
              Tasks
            </Typography>
              </Grid><Button 
              varinat="contained" 
              // sx={{ m: 4,}}
            >
              Add New Task
            </Button>
              </Grid>
          </Paper>
          {/* </Container> */}
        </Box>
        </React.Fragment>
    );
}

export default TaskHeader;