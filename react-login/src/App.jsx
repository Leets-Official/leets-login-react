
import './App.css'
import Attendance from './components/Attendance'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import { useState,createContext } from 'react'


export const UserContext = createContext();

function App() {

  const [name, setName] = useState("");
  const [part, setPart] = useState("");

  return (
    <>
    <UserContext.Provider value={{name, setName, part, setPart}}>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
      </Routes>
    </UserContext.Provider>

    </>
  )
}

export default App
