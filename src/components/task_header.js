import React from 'react';

import { Container, 
    Typography, Grid, 
    TextField, Box, 
    CssBaseline, ThemeProvider, 
    createTheme, Paper, Button } from "@mui/material"
const theme = createTheme();

function TaskHeader(props) {

    console.log(props.add)
    return (
       <React.Fragment> 
      <CssBaseline />
      <Box
          component="main"
          // sx={{
          //     backgroundColor: (theme) =>
          //     theme.palette.mode === 'light'
          //     ? theme.palette.grey[100]
          //     : theme.palette.grey[900],
          //     flexGrow: 1,
          //     height: '83.6vh',
          //     overflow: 'auto'
          // }}
      >
        {/* <Paper
          
          sx={{
            maxWidth: 'md',
            m: 8,
          }}
        > */}
        <Grid
          container
          sx={{
            // backgroundColor: (theme) =>
            // theme.palette.mode === 'light'
            // ? theme.palette.grey[300]
            // : theme.palette.grey[900],
            flexGrow: 1,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'row',
            my: 2
          }}
        >
          <Grid item
            md={9} lg={9} xl={9} xs={8}
          >
            <Typography 
              component="h1" 
              variant="h4" 
              sx={{
                // flexGrow: 1, 
                // m: 3, 
                // textAlign: 'center'
                px: '55%',
                py: 2
              }}
              >
              Tasks
            </Typography>
          </Grid>
            <Grid item
              md={3} lg={3} xl={3} xs={3}
            >

            <Button 
              varinat="contained" 
               sx={{ 
                display: 'inline-block',
                background: '#000',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                margin: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
                textDecoration: 'none',
                fontSize: '15px',
                fontFamily: 'inherit',
               }}
               onClick={(e) => props.onClick(!props.add)}
              >
              Add
            </Button>
              </Grid>
        </Grid>
                {/* </Paper> */}
          {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4,}}> */}
          {/* <Paper
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
          </Paper> */}
          {/* </Container> */}
        </Box>
        </React.Fragment>
    );
}

export default TaskHeader;