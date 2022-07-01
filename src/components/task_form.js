import { Container, 
  Typography, Grid, 
  TextField, Box, 
  CssBaseline, ThemeProvider, 
  createTheme, Paper, Button } from "@mui/material"
import React from 'react';
import TaskHeader from "./task_header";

const theme = createTheme();

export function TaskForm() {
  return (
    <ThemeProvider theme={theme}>
      <TaskHeader />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4,}}>
        
      </Container>
    </ThemeProvider>
  );
};