import { Container, 
  Typography, Grid, 
  TextField, Box, 
  CssBaseline, ThemeProvider, 
  createTheme, Paper, Button } from "@mui/material"
import React, { useState } from 'react';
import TaskHeader from "./task_header";
import TaskForm from "./task_form";
import useLocalStorage from "../hooks/useLocalStorage";
import TaskItems from "./task_items";

const theme = createTheme();

export function Task(props) {
  const [tasks, setTasks] = useLocalStorage('list', []);
  function createTask(task) {
    setTasks( prevTask => {
      if (prevTask != null) {
        return [ ...prevTask, {task}]
      } else {
        return [{ task }]
      }
    })
  }

  return (
    <ThemeProvider theme={theme}
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
      {/* <TaskHeader add={add} onClick={(value) => setAdd(value)}/> */}
      {(props.add) ? 
      <TaskForm onClick={createTask}/>
      : <TaskItems tasks={tasks}/>}
    </ThemeProvider>
  );
};