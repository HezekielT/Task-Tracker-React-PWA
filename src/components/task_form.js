import { createTheme, CssBaseline, 
    TextField, Box,
    Paper, Container,
    Button, Typography, Switch } from '@mui/material';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import React, { useState } from 'react';

const theme = createTheme();

function TaskForm(props) {

    const [form, setForm] = useState({
        task: "",
        day: "",
        reminder: false,
    })

    function handleSubmit(e) {
        // console.log("hello m")
        e.preventDefault();
        props.onClick(form);
        updateForm({task:"", day: "",reminder: false});

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
                            value={form.task}
                            onChange={(e) => updateForm({ task: e.target.value })}
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
                        <Switch checked={form.reminder} onChange={(e) => updateForm({ reminder: e.target.checked})} label={"Remind Me"}/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick = {handleSubmit}
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