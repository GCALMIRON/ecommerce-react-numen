import React, { useReducer } from 'react'
import { TYPES } from '../Cart/Actions/ShoppingActions'
import { shoppingInitialState } from '../Cart/Reducer/Reducer'
import { shoppingReducer } from '../Cart/Reducer/Reducer'
import Products from '../Cart/Products'


const Galeria = () => {
const [state, dispatch]= useReducer(shoppingReducer,shoppingInitialState)

//DESTRUCTURANDO ShoppingInitialState//
const {products}= state;

//FUNCIONES MANEJADORAS//

const addToCart= (id)=> {
  dispatch({type: TYPES.ADD_TO_CART, payload:id})
};


  return (
    <div className='w-full h-screen mt-60'>
      <h2>PRODUCTOS</h2>
        <div className='flex gap-5 ml-10'>
            {products.map(product => <Products key={product.id} data={product} addToCart={addToCart} /> )}
        </div>
    </div>
  )
}

export default Galeria
