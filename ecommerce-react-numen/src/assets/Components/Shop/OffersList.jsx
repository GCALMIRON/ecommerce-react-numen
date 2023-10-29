import React, { useContext} from 'react'
import { CartContext } from '../../context/ShoppingContext';

const OffersList = ({id,nombre,precio,foto}) => {
  
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
    <div className='items-center flex flex-col text-center border-2 justify-center  w-[240px] rounded-lg shadow-sm shadow-gray-600 '>
                <div className='justify-center object-contain rounded-t-lg '>
                <img src={foto} alt={nombre} className='object-contain w-[240px] h-[200px]' />
                </div>
                <div className='mt-5 bg-gray-800 w-[240px] rounded-b-lg h-auto p-1'>
                    <h2 className='mb-5 text-white'>{nombre}</h2>
                    <h3 className='mb-5 text-white'>${precio}.000</h3>
                </div>
    </div>
  )
}
export default OffersList
