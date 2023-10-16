import React, { createContext, useReducer } from "react";
import { shoppingInitialState } from "./Reducer/shoppingReducer";
import { shoppingReducer } from "./Reducer/shoppingReducer";
import Products from "./Products";
import { TYPES } from "./Actions/ShoppingActions";
import CartItem from "./CartItem";


const ShoppingCart = () => {
  
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCT, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  

  return (
    <div className="w-full h-screen flex-column mt-[18.75rem] mb-[75rem] flex justify-center flex-col items-center p-5 ">
      <h2 className="w-full text-center border-2 border-black border-solid mb-28 font-[Poppins] text-lg font-bold h-[3.75rem] hover:bg-gray-800 hover:text-lime-500">FEATURED PRODUCTS</h2>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {products.map((product) => (
          <Products key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="">
        <div className="flex gap-3 mt-28">
          <h2>CARRITO</h2>
           {cart.map((item, index) => (
            <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
          ))} 
        </div>
        <button
          className="border-2 border-black border-solid rounded-lg"
          onClick={() => clearCart()}
        >
          LIMPIAR CARRITO
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
