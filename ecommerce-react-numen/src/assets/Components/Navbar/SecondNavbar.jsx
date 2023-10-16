import React, { useState } from 'react'
import Categories from './Categories'


const SecondNavbar = () => {

    
  return (
    
    <div className='z-40 justify-center hidden w-full p-2 md:flex'>
        <div className='flex justify-center mr-14'>
        <ul className='flex text-sm '>
            <li className='m-2 duration-500 hover:text-lime-500'>
                <a href="/">HOT SALE</a>
            </li>
            <li className='z-50 m-2'>
                <Categories/>
            </li>
        
        </ul>
        </div>
        <div className='flex'>
            <input type="text" placeholder='Buscar...' className='p-1 text-xs border-2 border-r-0 border-solid outline-none rounded-l-md w-80 focus:border-gray-800' />
                <div className='flex justify-center align-middle rounded-r-md bg-lime-500 w-7'>
                    <button className='align-middle rounded-md top-2 hover:bg-lime-500'>
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>
        </div>
        
    </div>
  )
}

export default SecondNavbar
