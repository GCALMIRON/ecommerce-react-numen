import React, { useContext } from 'react'
import Items from './Items'
import { ProductsContext } from '../../context/ProductsContext'

const ItemList = () => {

  const [products,setProducts]= useContext(ProductsContext)

  const newProducts= products.filter((products) => {
    return products.precio < 300.000
  })
  console.log (newProducts)
  
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 mt-[9.375rem]">
       {newProducts.map((products) => {
        return <Items key={products.id} {...products}/>
      })} 
    </div>
  )
}

export default ItemList
