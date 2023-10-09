import React from 'react'


const Products = ({data, addToCart}) => {

const {id,name, price}=data;


  return (
    <div className='border-2 border-black border-solid'>
      <h2>{name}</h2>
      <h3>${price}</h3>
      <button className='text-white bg-gray-600 rounded-md' onClick={()=> addToCart(id)}>Agregar</button>
    </div>
  )
}

export default Products
