
import './App.css'
import Attendance from './components/Attendance'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
      </Routes>
    </>
  )
}

export default App
