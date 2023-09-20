import { useState } from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-screen'>
        <Navbar/>
    </div>
    </>
  )
}

export default App
