import React from 'react'
import { Home } from './features/home'
import { LoginComponent, RegisterComponent } from './features/auth'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
      </Routes>
    </Router>
  )
}

export default App

