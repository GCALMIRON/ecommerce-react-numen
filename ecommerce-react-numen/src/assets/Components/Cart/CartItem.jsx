import React from 'react'

const CartItem = ({data,deleteFromCart}) => {

const {id,name,price,quantity}=data;

  return (
    <div>
      <h2>{name}</h2>
      <h3>$ {price} * {quantity} = ${price * quantity}</h3>
      <button onClick={()=> deleteFromCart(id, false)}>Eliminar uno</button>
      <button onClick={()=> deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
  )
}

export default CartItem
