import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  let addV = () => {
    
      setCount(prevcounter =>   prevcounter +1)
      setCount(prevcounter => prevcounter+1)
      setCount(prevcounter => prevcounter+1)
      setCount(prevcounter => prevcounter+1)
    
    
  }

  let  rem = () => {
    if(count >0){
setCount (count-1)
    }
    
  }

  return (
    <>
<h1>counter</h1>
<br />
<button onClick={addV}>add:{count}</button>
<br />
<button onClick={rem}>remove:{count}</button>

    </>
  )
}

export default App
