import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Links from './components/Links'
import LogIn from './components/Login'

import { AuthProvider } from './components/Auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn/>} />
          <Route exact path="/links" element={<Links/>} />
          
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;