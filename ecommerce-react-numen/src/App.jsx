import { useState } from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Modal from './assets/Components/Modal/Modal'

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
