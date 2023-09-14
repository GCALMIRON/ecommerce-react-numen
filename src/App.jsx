import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <Navbar />
    </div>
    </>
  )
}

export default App
