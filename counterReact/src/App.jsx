import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const AddValue=()=>{
    if(counter<20){
      setCounter(counter+1)
    }
    else{
      alert("Value is restricted , you can not increase the value after 20");
    }
  }
 const RemoveValue=()=>{
  if(counter>0){
    setCounter(counter-1)
  }else{
    alert("Only positive value is showing !");
  }
 }

  return (
    <>
<h1>Show Updated Value : {counter}</h1>
<button onClick={AddValue}>Add Value by one</button>
<button onClick={RemoveValue}>Remove Vlaue by one</button>
    </>
  )
}

export default App
