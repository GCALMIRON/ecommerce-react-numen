import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
export const CartContext= createContext(null)



const ShoppingProvider = ({ children }) => {
  const [cart,setCart]=useState([]);
  
 
  


  return <CartContext.Provider value={[cart,setCart]} >
            {children}
          </CartContext.Provider>
  
}

export default ShoppingProvider
