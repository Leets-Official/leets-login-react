import './App.css';
import { createContext } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Attendance from './pages/Attendance';
import AttendanceSheet from './pages/AttendanceSheet';

export const LoginContext = createContext();

function App() {
  let name="박예진";
  let part="FE";
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`;
  let todayAttendance=false;

  const onCreateId = (Id) => {
    const newId = Id;
    console.log(newId);
  }

  const onCreatePassword = (password) => {
    const newPassword = password;
    console.log(newPassword);
  }

  const onCreateName = (name) => {
    const newName = name;
    console.log(newName);
  }

  const onCreatePart = (part) => {
    const newPart = part;
    console.log(newPart);
  }

  const nav = useNavigate();
  const onClickButton = () => {
    nav("/");
  }

  return (
    <div className='App'>
      <div>
        <button onClick={onClickButton}>HOME</button>
      </div>

      <LoginContext.Provider value={{
        onCreatePassword, onCreateName, onCreatePart, name, part, formattedDate, todayAttendance
      }}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/attendance" element={<Attendance/>}/>
          <Route path="/attendancesheet" element={<AttendanceSheet/>}/>
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
