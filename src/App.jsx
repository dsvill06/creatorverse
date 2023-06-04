import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import reactLogo from './assets/react.svg'
import Home from './components/Home.jsx'
import AddCreator from './pages/AddCreator'
import Hero from "./components/Hero.jsx"
import './App.css'

function App() {
  return (
    <>
      <div>
        <Hero/>
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path='/addCreator' element={<AddCreator/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
