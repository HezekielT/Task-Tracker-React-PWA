import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = React.createContext();

export function useTask() {
    return useContext(TaskContext);
}

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useLocalStorage('list', []);
    function createTask(id, task_name, day, reminder) {
        setTasks( prevTask => {
        if (prevTask != null) {
            return [ ...prevTask, {id, task_name, day, reminder}]
        } else {
            return [{ id, task_name, day, reminder }]
        }
        })
    }

    function deleteTask(id) {
        const items = tasks.filter(item => item.id !== id)
        setTasks( prevTask => {
            if(prevTask != null) {
                if(prevTask.length == 1) {
                    return localStorage.clear('Tasks-list')
                }
                return [...items]
            } else{
                return []
            }
        })
    }

    return (
        <TaskContext.Provider value={{ tasks, createTask, deleteTask}}>
            { children }
        </TaskContext.Provider>
    );
}