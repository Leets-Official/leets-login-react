import './App.css'
import { createContext, useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import SuccessLogin from './SuccessLogin.jsx'
export const LoginContext = createContext()


function App()  {
  const [name, setName] = useState('')
  const [part, setPart] = useState('')
  const day = new Date()
  const date = `${day.getFullYear()}.${day.getMonth()+1}.${day.getDate()}`

  const onCreateEmail = (email) => {
    const newEmail= email;
  }

  const onCreatePassword = (password) => {
    const newPassword = password;
  }

  const onCreateRePassword = (RePassword) => {
    const newRePassword = RePassword;
  }

  const onCreateName = (name) => {
    setName(name);
  }

  const onCreatePart = (part) => {
    setPart(part)
  }

  return(
  <div className='App'>
    <LoginContext.Provider value = {{onCreateEmail, onCreatePassword, onCreateRePassword, onCreateName, onCreatePart, name, part, date}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/successLogin' element={<SuccessLogin/>}/>
      </Routes>
    </LoginContext.Provider>
  </div>
  )
}

export default App;