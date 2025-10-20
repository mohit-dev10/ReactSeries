import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    name:"Mohit",
    Weight:"60"
  }

  return (
    <>
    <Card name="Mohit" Fobj={obj}/>
    <Card name="Anu"/>
    <Card name="Ghanendra"/>
    <Card/>
    </>
  )
}

export default App
