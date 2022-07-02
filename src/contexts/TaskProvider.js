import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = React.createContext();

export function useTask() {
    return useContext(TaskContext);
}

export function TaskProvider({ children }) {
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
        <TaskContext.Provider value={{ tasks, createTask}}>
            { children }
        </TaskContext.Provider>
    );
}