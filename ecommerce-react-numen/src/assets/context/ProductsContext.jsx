import React, { createContext } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
export const ProductsContext= createContext(null)

const ProductsProvider = ({children}) => {
const [products,setProducts]= useState([]);

const getData= async(url)=>{
    const resProducts= await axios.get(url)
    setProducts(resProducts.data)
  }


  useEffect(()=>{
    getData("http://localhost:3000/products");
  }, []);


  return <ProductsContext.Provider value={[products,setProducts]}>
    {children}
  </ProductsContext.Provider>
}

export default ProductsProvider
