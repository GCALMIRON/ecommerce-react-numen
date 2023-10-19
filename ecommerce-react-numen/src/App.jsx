import { useState } from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import ItemList from './assets/Components/Shop/ItemList'
import Footer from './assets/Components/Footer/Footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Shopping from './assets/Components/Shop/Shopping';
import ShoppingProvider from './assets/context/ShoppingContext';
import Cart from './assets/Components/Navbar/Cart';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-screen'>
    <ShoppingProvider>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<ItemList/>}/> 
            <Route path="/cart" element={<Cart/>}/> 
          </Routes>
        {/* <Footer/> */}
      </Router>
      </ShoppingProvider>
    </div>
    </>
  )
}

export default App
