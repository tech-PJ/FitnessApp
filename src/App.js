import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
// index.js or App.js




const App = () => {
  return (
    <Router>
    <Box width="400px">
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
       </Routes>
       <Footer/>
       </Box>
       </Router>
  )
}

export default App