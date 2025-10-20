import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("Olive")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{background:color}}>
           <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className='flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-3 py-2 rounded-xl'>
              <button onClick={()=>{setColor("Red")}} className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
              style={{background:"red"}}>Red</button>
              <button onClick={()=>{setColor("Blue")}} className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
              style={{background:"Blue"}}>Blue</button>
              <button onClick={()=>{setColor("Green")}} className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
              style={{background:"Green"}}>Green</button>
              <button onClick={()=>{setColor("Yellow")}} className='outline-non px-4 py-1 rounded-full text-black shadow-lg'
              style={{background:"Yellow"}}>Yellow</button>
              <button onClick={()=>{setColor("Purple")}} className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
              style={{background:"Purple"}}>Purple</button>
              <button onClick={()=>{setColor("Pink")}} className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
              style={{background:"Pink"}}>Pink</button>
              <button onClick={()=>{setColor("Brown")}} className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
              style={{background:"Brown"}}>Brown</button>
              <button onClick={()=>{setColor("White")}} className='outline-non px-4 py-1 rounded-full text-black shadow-lg'
              style={{background:"White"}}>White</button>
              <button onClick={()=>{setColor("Gray")}} className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
              style={{background:"Gray"}}>Gray</button>
              <button onClick={()=>{setColor("Cyan")}} className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
              style={{background:"Cyan"}}>Cyan</button>
              <button onClick={()=>{setColor("Magenta")}} className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
              style={{background:"Magenta"}}>Magenta</button>
              <button onClick={()=>{setColor("Gold")}} className='outline-non px-4 py-1 rounded-full text-black shadow-lg'
              style={{background:"Gold"}}>Gold</button>
              <button onClick={()=>{setColor("Silver")}} className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
              style={{background:"Silver"}}>Silver</button>
              <button onClick={()=>{setColor("Yellow")}} className='outline-non px-4 py-1 rounded-full text-black shadow-lg'
              style={{background:"Yellow"}}>Yellow</button>              
            </div>
           </div>
    </div>
    </>
  )
}

export default App
