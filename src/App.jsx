import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Team from './Pages/Team'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
      </div>
    
      
  )
}

export default App
