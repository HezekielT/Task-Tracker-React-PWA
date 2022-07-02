import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import { Task } from './components/task';

function App() {
  const [add, setAdd] = useState(false)
  return (
    <Router>
      <NavBar add={add} onClick={(value) => setAdd(value)}/>
      <Routes>
        <Route exact path="/" element={<Task add={add}/>} />
      </Routes>
    </Router>
  );
}

export default App;
