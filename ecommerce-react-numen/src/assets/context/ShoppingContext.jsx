import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
export const CartContext= createContext(null)

const ShoppingProvider = ({ children }) => {
  const [cart,setCart]=useState([]);
  const [products,setProducts]= useState([]);

  const getData= async ()=> {
    const productsUrl= "http://localhost:3000/Productos"
    const resProducts= await axios.get(productsUrl)
    const newProducts= await resProducts.data
    // setProducts(newProducts)
  }
  useEffect(()=> {
    getData()
  },[])
  

  return <CartContext.Provider value={[cart,setCart]}>
            {children}
          </CartContext.Provider>
  
}

export default ShoppingProvider
