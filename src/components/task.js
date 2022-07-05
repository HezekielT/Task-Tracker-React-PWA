import { ThemeProvider, createTheme } from "@mui/material"
import React from 'react';
import TaskForm from "./task_form";
import TaskItems from "./task_items";

const theme = createTheme();

export function Task(props) {
  

  return (
    <ThemeProvider theme={theme}>
      {(props.add) ? <TaskForm /> : <TaskItems />}
    </ThemeProvider>
  );
};