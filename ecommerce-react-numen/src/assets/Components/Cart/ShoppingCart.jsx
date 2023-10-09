import React, { useReducer } from "react";
import { shoppingInitialState } from "./Reducer/shoppingReducer";
import { shoppingReducer } from "./Reducer/shoppingReducer";
import Products from "./Products";

const ShoppingCart = () => {

const [state, dispatch] = useReducer(shoppingReducer,shoppingInitialState);
const {products,cart}=state;

const addToCart = () => {}

const deleteFromCart = () => {}

const clearCart = () => {}


  return (
    <div className="w-full h-screen mt-52">
      <h2>PRODUCTOS</h2>
      <div className="flex gap-5 ml-10">
       {products.map((product)=> <Products key={product.id}data={product}addToCart={addToCart}/>)}
      </div>
      <div>
        <div className="mt-28">
          <h2>CARRITO</h2>
        </div>
        <button onClick={() => clearCart()}>LIMPIAR CARRITO</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
