import React from 'react'
import { useState } from 'react';

const Cart = () => {
const [isopenModal,setIsopenModal] = useState(false);

  return (
    <li className='ml-8 text-xl text-white duration-500 md: hover:text-lime-500'>
        <button onClick={()=> setIsopenModal(true)}><ion-icon name="cart-outline"></ion-icon></button>
        {
            isopenModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm'>
                    <div className='flex items-center justify-center gap-5 p-5 bg-white rounded'>
                        <button onClick={()=> setIsopenModal(false)} className='px-6 py-2 text-sm text-white bg-gray-800 rounded-lg hover:bg-lime-500 hover:text-gray-800'>
                                Continuar compra
                        </button>
                        <button onClick={()=> setIsopenModal(false)} className='px-6 py-2 text-sm text-white bg-gray-800 rounded-lg hover:bg-lime-500 hover:text-gray-800'>
                                Finalizar compra
                        </button>
                    </div>
                </div>
                            )
            }
    </li>
  )
}

export default Cart
