import './App.css';
import { createContext, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Attendance from './pages/Attendance';
import AttendanceSheet from './pages/AttendanceSheet';

export const LoginContext = createContext();

function App() {
  
  const [name, setName] = useState("");
  const [part, setPart] = useState("");
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`;

  const onCreateId = (Id) => {
    const newId = Id;
  }

  const onCreatePassword = (password) => {
    const newPassword = password;
  }

  const onCreateConfirmPassword = (confirmPassword) => {
    const newConfirmPassword = confirmPassword;
  }

  const onCreateName = (name) => {
    setName(name);
  }

  const onCreatePart = (part) => {
    setPart(part)
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
        onCreateId, onCreatePassword, onCreateConfirmPassword, onCreateName, onCreatePart, name, part, formattedDate
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
