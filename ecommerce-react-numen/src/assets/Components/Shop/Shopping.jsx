import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/ShoppingContext';
import Items from './ItemsCard';
import { ProductsContext } from '../../context/ProductsContext';

const Shopping = (id) => {

    
    const [cart,setCart]=useContext(CartContext);
    const [products,setProducts]= useContext(ProductsContext);

    const quantity= cart.reduce((acc,current)=> {
    return acc + current.quantity;
    }, 0);

    const TotalPrice= cart.reduce((acc,current)=> acc + current.quantity * current.precio ,0)

    const getQuantityByID= (id) => {
        return cart.find((item)=> item.id===id)?. quantity || 0;
      }
    const quantityPerItem= getQuantityByID(id);

    

  return (
    <div className='flex flex-col'>
      <div className='mb-5 text-center text-black '>Productos en el carrito: {quantity}</div>
        <div className='flex flex-col items-center justify-center w-screen mb-5'>
            {cart.map((item)=> <div className='flex items-center w-auto p-1 mb-5 align-middle border-2 border-gray-500 border-solid rounded-lg shadow-lg shadow-gray-800'>
                <img className='w-20 ml-4 text-black' src={item.foto} alt={item.nombre} />
                <h2 className='ml-4 text-black'>{item.nombre}</h2>
                <h3 className='ml-4 text-black'>${item.precio}.000</h3>
            </div>)}
        
        </div>
      <div className='flex justify-center text-black'>Total: ${TotalPrice}.000,00</div>
    </div>
  )
}

export default Shopping
