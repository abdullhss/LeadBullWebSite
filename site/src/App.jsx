import { useState } from 'react'
import FirstSection from './components/FirstSection'
import AboutUs from './components/AboutUs'
import Approach from './components/Approach'
import ThreejsLogo from './components/ThreejsLogo.jsx'
import Benefits from './components/Benefits.jsx'
function App() {
  return (
    <>
      <FirstSection></FirstSection>
      <AboutUs></AboutUs>
      <Approach></Approach>
      <ThreejsLogo></ThreejsLogo>
      {/* <Benefits></Benefits> */}
    </>
  )
}

export default App
