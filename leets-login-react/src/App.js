import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Rout from './rout'
import './App.css'

const App = () => {
  return(<div className='App'>
    <BrowserRouter>
    <Rout />
    </BrowserRouter>
  </div>
  )
}

export default App;
