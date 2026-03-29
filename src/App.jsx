import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import AMC from './components/AMC'
import Footer from './components/Footer'
import  Home from './components/Home'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/AMC" element={<AMC/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
