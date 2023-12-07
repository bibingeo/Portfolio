import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
 

  return (
    <>
    <div className='container'>
      <Navbar />    
      <Home />  
      <About />
      <Skills />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </div>
  
    </>
  )
}

export default App
