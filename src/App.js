import React, { useEffect, useState } from 'react';
import { getStudents } from './api/api';

import { AllStudents } from './components/allStudents/AllStudents.js';
import { Student } from './components/student/Student';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <h1>Students</h1>
      </header>
      <div className="container">
        <div className="col">
         <AllStudents students={students} />
        </div>
        <div className="col">
          <Student preview student={selected} />
        </div>
      </div>
    </div>
  );
}

export default App;
