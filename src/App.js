import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import { Task } from './components/task';
import { TaskProvider } from './contexts/TaskProvider';

function App() {
  const [add, setAdd] = useState(false)
  return (
    <TaskProvider>
    <Router>
      <NavBar add={add} onClick={(value) => setAdd(value)}/>
      <Routes>
        <Route exact path="/" element={<Task add={add}/>} />
      </Routes>
    </Router>

    </TaskProvider>
  );
}

export default App;
