import React, { useContext} from 'react'
import ItemsCard from './ItemsCard'
import { ProductsContext } from '../../context/ProductsContext'



const OffersProducts = () => {

const [products,setProducts]= useContext(ProductsContext)

const newProducts= products.filter((products) => {
    return products.precio < 80.000
  })

  return (
      <div className='flex flex-row flex-wrap justify-center gap-4 mt-[9.375rem]'>
            {newProducts.map((products) => {
                return <ItemsCard key={products.id} {...products}/>
            })} 
      </div>
  )
}

export default OffersProducts
