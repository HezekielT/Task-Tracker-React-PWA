import { Card, CardContent, Typography, Container, Grid } from '@mui/material';
import React from 'react';
import { useTask } from '../contexts/TaskProvider';

function TaskItems(props) {
    const { tasks } = useTask();
    
    return (
        <Container maxWidth="sm" sx={{ mt:4, mb: 4, }}>
            <Grid item sm={12} xs={12} xl={6} lg={6}>    
                <Card
                    sx={{
                        display: 'flex',
                        mt: 4, mb: 4
                    }}
                >
                    <CardContent sx={{ flex:1 }}>
                        {(tasks) ? 
                        tasks.map(task => (
                            <>
                            {/* <Typography>{task.task}</Typography> */}
                            <Typography>{task.task.reminder}</Typography>
                            </>
                        )) : <Typography>No Tasks Yet!</Typography> 
                        // <Typography>J</Typography>
                        // console.log(tasks)
                    }
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
}

export default TaskItems;