import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
  <div className="w-full min-h-screen duration-200"
     style={{ backgroundColor: color }}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className='flex flex-wrap px-8 py-2 gap-3 shadow-lg bg-white rounded-xl'>
        <button 
        onClick={() => setColor("red")}
        className='bg-red px-5 py-2 rounded-xl' 
            style={{ backgroundColor: "red" }}> red</button>

            <button 
        onClick={() => setColor("black")}
        className='bg-red px-5 py-2 rounded-xl' 
            style={{ backgroundColor: "black" }}> red</button>

            <button 
        onClick={() => setColor("yellow")}
        className='bg-yellow px-5 py-2 rounded-xl' 
            style={{ backgroundColor: "yellow" }}> red</button>

            <button 
        onClick={() => setColor("white")}
        className='bg-white px-5 py-2 rounded-xl' 
            style={{ backgroundColor: "white" }}> red</button>

            <button 
        onClick={() => setColor("pink")}
        className='bg-pink px-5 py-2 rounded-xl' 
            style={{ backgroundColor: "pink" }}> red</button>

            <button 
        onClick={() => setColor("green")}
        className='bg-green px-5 py-2 rounded-xl' 
            style={{ backgroundColor: "green" }}> red</button>

            <button 
        onClick={() => setColor("skyblue")}
        className='bg-skyblue px-5 py-2 rounded-xl' 
            > red</button>

            <button 
        onClick={() => setColor("blue")}
        className='bg-blue px-5 py-2 rounded-xl' 
            > red</button>

          
      </div>
    </div>
  </div>
  )
}

export default App
