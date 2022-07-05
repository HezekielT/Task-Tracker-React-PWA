import { Card, CardContent, Typography, Container, Grid, CardActions } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import React from 'react';
import { useTask } from '../contexts/TaskProvider';

function TaskItems(props) {
    const { tasks, deleteTask } = useTask()
    
    return (
        <Container maxWidth="lg" sx={{ mt:4, mb: 4, }}>
            {(tasks) ? 
            (<Grid container>
                {tasks.map(task => (
                    <Grid item key={task.id} xs={12} md={12} lg={12} sx={{mb: 4}}>
                        
                        <Card elevation={1} sx={{display: 'flex', alignItems: 'top'}}>
                            <CardContent sx={{ flex: 1 }}>
                                <Typography component="h1" variant="h3">{task.task_name}</Typography>
                                {console.log(task.task_name)}
                                <Typography component="h1" variant="h6">{task.day}</Typography>
                            </CardContent>
                            <CardActions sx={{cursor: 'pointer'}} onClick={() => deleteTask(task.id)}>
                                
                                <DeleteIcon /> 
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>) : 
            (<Card elevation={1}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h1" variant="h5" sx={{textAlign: 'center'}}>No Tasks Yet!</Typography>
                </CardContent>
            </Card>
            )}
        </Container>
    );
}

export default TaskItems;