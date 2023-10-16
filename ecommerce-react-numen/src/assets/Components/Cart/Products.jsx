import React from 'react'


const Products = ({data, addToCart}) => {

const {id,name, price,img}=data;


  return (
  
    <div className=' items-center flex flex-col text-center border-2 justify-center  w-[240px] rounded-lg shadow-md shadow-black hover:-translate-y-5 mb-4 hover: transform-cpu transition ease-in-out delay-150'>
      <div className='justify-center object-contain rounded-t-lg '>
      <img src={img} alt={name} className='object-contain w-[240px] h-[200px]' />
      </div>
      <div className='mt-5 bg-gray-800 w-[240px] rounded-b-lg h-[200px] p-1'>
      <h2 className='mb-5 text-white'>{name}</h2>
      <h3 className='mb-5 text-white'>${price}.000</h3>
      <button className='' onClick={()=> addToCart(id)}>
        <h4 className='flex-row justify-center p-1 text-sm font-semibold text-gray-800 bg-white rounded-md hover:text-white hover:bg-lime-600'>AÑADIR AL CARRITO</h4>
      </button>
      </div>
    </div>
  )
}

export default Products
