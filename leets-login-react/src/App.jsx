import React from 'react';

import Login from './components/Login';
import Signup from './components/Signup';
import Attendance from './components/Attendance';
import AttendLog from './components/AttendLog';

function App() {
  return (
    <div>
      <Login />
      <Signup />
      <AttendLog />
      <Attendance />
    </div>
  );
};

export default App;