import { useState } from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import ItemList from './assets/Components/Shop/ItemList'
import Footer from './assets/Components/Footer/Footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Shopping from './assets/Components/Shop/Shopping';
import ShoppingProvider from './assets/context/ShoppingContext';
import Cart from './assets/Components/Navbar/Cart';
import ProductsProvider from './assets/context/ProductsContext';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-screen'>
  <ProductsProvider>
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
  </ProductsProvider>
    </div>
    </>
  )
}

export default App
