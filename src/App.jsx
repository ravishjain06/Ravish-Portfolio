import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import HeroSection from './Pages/HeroSection'
import Navbar from './Pages/Navbar'
import Project from './Pages/Project'
import Skills from './Pages/Skills'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <About />
            <Skills />
            <Project />
            <Contact />
          </>
        } />
        
      </Routes>
    </Router>
  )
}

export default App
