import React, { useContext, useReducer } from 'react'
import { useState } from 'react';
import { CartContext } from '../../Context/ShoppingContext';
import { Link } from 'react-router-dom';
import Shopping from '../Shop/Shopping';

const Cart = () => {

const [isopenModal,setIsopenModal] = useState(false);

const [cart,setCart]=useContext(CartContext);
  
  const quantity= cart.reduce((acc,current)=> {
    return acc + current.quantity;
  }, 0);


  return (
    <li className="ml-8 text-xl text-white duration-500 md: hover:text-lime-500">
      <Link to={"/cart"}>
        <button onClick={() => setIsopenModal(true)}>
        <ion-icon name="cart-outline"></ion-icon>
        <span className='text-sm'>{quantity}</span>
      </button>
      </Link>
      {/* VENTAN MODAL */}
      {isopenModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-lg">
         <div className="flex flex-col items-center justify-center gap-5 p-5 bg-white rounded">
            <Shopping/>
            <Link to={"/"}>
            <button
              onClick={() => setIsopenModal(false)}
              className="px-6 py-2 text-sm text-white bg-gray-800 rounded-lg hover:bg-lime-500 hover:text-gray-800"
            >
              Continuar compra
            </button>
            </Link>
            <button
              onClick={() => setIsopenModal(false)}
              className="px-6 py-2 text-sm text-white bg-gray-800 rounded-lg hover:bg-lime-500 hover:text-gray-800"
            >
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default Cart
