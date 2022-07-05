import { createTheme, CssBaseline, 
    TextField, Box,
    Paper, Container,
    Button, Typography, Switch } from '@mui/material';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import React, { useState } from 'react';
import { useTask } from '../contexts/TaskProvider';
import { v4 as uuidV4 } from 'uuid';  

const theme = createTheme();

function TaskForm(props) {
    const { createTask } = useTask();

    const [form, setForm] = useState({
        task_name: "",
        day: "",
        reminder: false,
    })

    function handleSubmit(e) {
        // console.log("hello m")
        e.preventDefault();
        const id = uuidV4();
        console.log(id);
        createTask(id, form.task_name, form.day, form.reminder);
        updateForm({task_name:"", day: "",reminder: false});

    }

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value};
        })
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ mb: 4,}}>
                <Paper
                    sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 4
                    }}
                >
                    <Typography component="h2" variant="h5">
                        Add New Task
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField 
                            margin="normal"
                            required
                            fullWidth
                            id="task"
                            label="Task"
                            name="task"
                            autoFocus
                            value={form.task_name}
                            onChange={(e) => updateForm({ task_name: e.target.value })}
                        />
                        <TextField 
                            margin="normal"
                            required
                            fullWidth
                            id="day"
                            label="Day & Time"
                            name="day"
                            value={form.day}
                            onChange={(e) => updateForm({ day: e.target.value })}
                        />
                        {/* <DateTimePicker
                            label="Date & Time"
                            value={form.day}
                            onChange={(e) => updateForm({ day: e.target.value })}
                            renderInput={(params) => <TextField {...params} />}
                        /> */}
                        <Switch checked={form.reminder} onChange={(e) => updateForm({ reminder: e.target.checked})} /> Remind Me
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            // onClick = {handleSubmit}
                        >
                            Save
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </React.Fragment>
    );
}

export default TaskForm;