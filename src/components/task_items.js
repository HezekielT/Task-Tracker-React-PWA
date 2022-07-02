import { Card, CardContent, Typography, Container, Grid } from '@mui/material';
import React from 'react';

function TaskItems(props) {
    const taskHolder = props.tasks;
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
                        {props.tasks ?
                        <Typography>No Tasks Yet!</Typography> :
                        taskHolder.map(task => (
                            <>
                            <Typography>{task.task}</Typography>
                            <Typography>{task.reminder}</Typography>
                            </>
                        ))}
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
}

export default TaskItems;