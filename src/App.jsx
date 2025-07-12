import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import GetInTouch from './components/GetInTouch/GetInTouch'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <GetInTouch/>
     
    </div>
  )
}

export default App
