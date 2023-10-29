import React, { useContext} from 'react'
import { CartContext } from '../../context/ShoppingContext';

const ItemsCard = ({id,nombre,precio,foto,datos}) => {
  
  const [cart,setCart]= useContext(CartContext);

 

  const addToCart= ()=> {
    setCart((currentItems)=> {
      const itemInCart= currentItems.find((item)=> item.id===id);
      if(itemInCart){
        return currentItems.map((item)=> {
          if(item.id===id) {
            return {...item, quantity: item.quantity + 1}
          } else {
            return item;
          } 
        });
      }else{
        return [...currentItems, {id,quantity:1,precio,nombre,foto}]
      }
    })
  }

  const removeOneProduct= (id)=> {
    setCart((currentItems)=>{
      if(currentItems.find((item)=> item.id===id)?. quantity===1){
            return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item)=> {
          if (item.id=== id ) {
            return {...item, quantity: item.quantity -1}
          } else {
            return item;
          }
        })
      }
    });
  }

  const getQuantityByID= (id) => {
    return cart.find((item)=> item.id===id)?. quantity || 0;
  }
  const quantityPerItem= getQuantityByID(id);
  
 

  return (
    <div className='items-center flex flex-col text-center border-2 justify-center  w-[240px] rounded-lg shadow-md shadow-black hover:-translate-y-5 mb-4 hover: transform-cpu transition ease-in-out delay-150'>
      <div >
        {quantityPerItem > 0 && (
          <div className='p-1 mt-1 text-lg rounded-lg bg-lime-500'>{quantityPerItem}</div>
        )}
      </div>
      <div className='justify-center object-contain rounded-t-lg '>
      <img src={foto} alt={nombre} className='object-contain w-[240px] h-[200px]' />
      </div>
      <div className='mt-5 bg-gray-800 w-[240px] rounded-b-lg h-auto p-1'>
        <h2 className='mb-5 text-white'>{nombre}</h2>
        {/* <h3>{datos}</h3> */}
        <h3 className='mb-5 text-white'>${precio}.000</h3>
            <div className='flex flex-col items-center'>
              {
                quantityPerItem ===0 ? (
                  <button className='mb-2 w-44' onClick={()=> addToCart(id)}>
                  <h4 className='flex-row justify-center p-1 text-sm font-semibold text-gray-800 bg-white rounded-md hover:text-white hover:bg-lime-600'>
                    + AÑADIR AL CARRITO
                  </h4>
                  </button>
                ) : (
                  <button className='mb-2 w-44' onClick={()=> addToCart(id)}>
                  <h4 className='flex-row justify-center p-1 text-sm font-semibold text-gray-800 bg-white rounded-md hover:text-white hover:bg-lime-600'>
                    + AÑADIR MAS
                  </h4>
                  </button>
                )
              }
              
              {
                quantityPerItem > 0 && (
                  <button className='mb-2 w-44' onClick={()=> removeOneProduct(id)}>
                  <h4 className='flex-row justify-center p-1 text-sm font-semibold text-gray-800 bg-white rounded-md hover:text-white hover:bg-red-600'>
                    - ELIMINAR UNO
                  </h4>
                  </button>

                )
              }
        
              
            </div>
          </div>
    </div>
  )
}

export default ItemsCard
