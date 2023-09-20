import React, { useState } from 'react'
import SecondNavbar from './SecondNavbar';

const Navbar = () => {
    let Links= [
        {name:"INICIO",link:"/"},
        {name:"INGRESAR",link:"/"},
        {name:"REGISTRARSE",link:"/"},
        {name:"CONTACTO",link:"/"},
    ]
    let Links2= [
        {name:"CATEGORIAS",link:"/"},
        {name:"HOT SALE",link:"/"},
    ]
    let [open,Setopen]= useState(false);

  return (
    <div className='fixed top-0 left-0 w-full shadow-md'>
        <div className='items-center justify-between py-4 bg-gray-800 md:flex md:px-10 px-7'>
            <div  className='bg-yellow-300 ml-5 w-36 text-xl rounded-full flex place-items-center justify-center font-[Poppins]'>
                    <ion-icon name="game-controller-outline"></ion-icon>
                    <h1 className='text-base font-extrabold'>ELECTRONICS</h1>
            </div>
            <div  className='absolute text-xl text-black duration-500 cursor-pointer right-12 top-3 md:hidden'>
                <input type="text" placeholder='Buscar...' className={`p-1 text-xs border-2 border-solid outline-none rounded-l-md sm:w-16 ${open ? 'top-5':'hidden' }`}/>
            </div>
            <div onClick={()=>Setopen(!open)} className='absolute text-3xl text-white duration-500 cursor-pointer hover:text-lime-500 right-4 top-3 md:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
                <ul className= {`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10':'top-[-490px]' }`}>
                    {Links.map((link)=>(
                        <li key={link.name} className='ml-8 text-sm text-white duration-500 md: hover:text-lime-500 md:my-0 my-7'>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                    {Links2.map ((link)=>(
                        <li key={link.name} className='ml-8 text-sm text-white duration-500 md: hover:text-lime-500 md:my-0 my-7 md:hidden'>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                    <li className='ml-8 text-xl text-white duration-500 md: hover:text-lime-500'>
                        <ion-icon name="cart-outline"></ion-icon>
                    </li>
                </ul>
        
        </div>
        <SecondNavbar/>
    </div>
  )
}

export default Navbar
