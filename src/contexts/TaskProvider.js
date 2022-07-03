import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = React.createContext();

export function useTask() {
    return useContext(TaskContext);
}

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useLocalStorage('list', []);
    function createTask(id, task) {
        setTasks( prevTask => {
        if (prevTask != null) {
            return [ ...prevTask, {id, task}]
        } else {
            return [{ id, task }]
        }
        })
    }

    function deleteTask(id) {
        // console.log(id);
        const items = tasks.filter(item => item.id !== id)
        setTasks({ items })
        // console.log("this",items)
        // localStorage.clear();
        // localStorage.setItem('Tasks-list', items);
        console.log(localStorage.getItem("Tasks-list"))
    }

    return (
        <TaskContext.Provider value={{ tasks, createTask, deleteTask}}>
            { children }
        </TaskContext.Provider>
    );
}