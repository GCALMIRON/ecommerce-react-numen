import React, { useContext } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductsContext } from '../../context/ProductsContext';
import OffersList from '../Shop/OffersList';
import '../Galeria/Galeria.css'
const Galeria = () => {

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const [products,setProducts]= useContext(ProductsContext)

const newProducts= products.filter((products) => {
      return products.precio < 80.000
    })

const productsOffers= newProducts.map((products)=> (
  <OffersList key={products.id} {...products}/>
));

  return (
    <main className='flex flex-col w-full h-auto mt-5 mb-20'>
      <section className='flex items-center w-full h-auto'>
          <img src="../src/assets/components/Galeria/img/imagenbienvenida.jpg" alt="imagen de bienvenida" className='object-cover w-full h-[50rem]' />
      </section>
      <section>
          <div className='flex justify-center mt-20 mb-10 border-2 border-black rounded-sm mx-9 hover:bg-gray-800 hover:text-lime-500'>
          <h2 className='text-2xl'>NUESTRAS OFERTAS</h2>
          </div>
          <Carousel responsive={responsive} className='Offerlist' >
            {productsOffers}
          </Carousel>
      </section>
    </main>
  )
}

export default Galeria
