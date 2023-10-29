import { useState } from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Galeria from './assets/Components/Galeria/Galeria'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ShoppingProvider from './assets/context/ShoppingContext';
import Cart from './assets/Components/Navbar/Cart';
import ProductsProvider from './assets/context/ProductsContext';
import Footer from './assets/Components/Footer/Footer';
import Notebooks from './assets/Components/Pages/Notebooks'
import Procesadores from './assets/Components/Pages/Procesadores'
import Mothers from './assets/Components/Pages/Mothers'
import PlacasVideo from './assets/Components/Pages/PlacasVideo'
import Ram from './assets/Components/Pages/Ram'
import Almacenamiento from './assets/Components/Pages/Almacenamiento'
import Refri from './assets/Components/Pages/Refri'
import Gabinetes from './assets/Components/Pages/Gabinetes'
import Monitores from './assets/Components/Pages/Monitores'
import Perifericos from './assets/Components/Pages/Perifericos'
import Sillas from './assets/Components/Pages/Sillas'
import Hotsale from './assets/Components/Pages/Hotsale';
import Ingresar from './assets/Components/Pages/Ingresar';
import Registrarse from './assets/Components/Pages/Registrarse';
import Contacto from './assets/Components/Pages/Contacto'


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
            <Route path="/" element={<Galeria/>}/> 
            <Route path="/Ingresar" element={<Ingresar/>}/> 
            <Route path="/Registrase" element={<Registrarse/>}/> 
            <Route path="/Contacto" element={<Contacto/>}/> 
            <Route path="/cart" element={<Cart/>}/> 
            <Route path="/Hotsale" element={<Hotsale/>}/> 
            <Route path="/Notebooks" element={<Notebooks/>}/> 
            <Route path="/Procesadores" element={<Procesadores/>}/> 
            <Route path="/Mothers" element={<Mothers/>}/> 
            <Route path="/PlacasVideo" element={<PlacasVideo/>}/> 
            <Route path="/Ram" element={<Ram/>}/> 
            <Route path="/Almacenamiento" element={<Almacenamiento/>}/> 
            <Route path="/Refri" element={<Refri/>}/> 
            <Route path="/Gabinetes" element={<Gabinetes/>}/> 
            <Route path="/Monitores" element={<Monitores/>}/> 
            <Route path="/Perifericos" element={<Perifericos/>}/> 
            <Route path="/Sillas" element={<Sillas/>}/>
          </Routes>
       <Footer/>
      </Router>
      </ShoppingProvider>
  </ProductsProvider>
    </div>
    </>
  )
}

export default App
