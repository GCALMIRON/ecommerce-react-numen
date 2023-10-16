import React from 'react'

const CartItem = ({data,deleteFromCart}) => {

const {id,name,price,img,quantity}=data;

  return (
    <div className='flex flex-col items-center justify-center w-48 p-1 mb-6 text-center border-2 border-black border-solid'>
      <div className='w-[6.25rem]'>
        <img src={img} alt={name} />
      </div>
      <h2 className='text-sm'>{name}</h2>
      <h3 className='mt-4 mb-4 text-sm text-center'>${price}.000 x{quantity}=${price*quantity}.000</h3>
      <button className='p-1 mb-6 ml-10 mr-10 text-sm border-2 border-black border-solid rounded-lg' onClick={()=> deleteFromCart(id)}>Eliminar uno</button>
      <button className='p-1 ml-10 mr-10 text-sm border-2 border-black border-solid rounded-lg' onClick={()=> deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
  )
}

export default CartItem
