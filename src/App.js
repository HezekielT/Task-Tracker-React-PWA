import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import { TaskForm } from './components/task_form';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<TaskForm />} />
      </Routes>
    </Router>
  );
}

export default App;
