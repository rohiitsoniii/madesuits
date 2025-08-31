import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BespokeTailoringComponent from './components/BespokeTailoringComponent '
import HeroSection from './components/HeroSection'
import MenswearService from './components/MenswearService'
import BespokeIntroComponent from './components/BespokeIntroComponent'
import BespokeServicesComponent from './components/BespokeServicesComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroSection/>
    <BespokeIntroComponent/>
    
    </>
  )
}

export default App
