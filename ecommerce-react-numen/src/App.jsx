import { useState } from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import ShoppingCart from './assets/Components/Cart/ShoppingCart'
import Footer from './assets/Components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-screen'>
        <Navbar/>
        <ShoppingCart/>
        <Footer/>
    </div>
    </>
  )
}

export default App
