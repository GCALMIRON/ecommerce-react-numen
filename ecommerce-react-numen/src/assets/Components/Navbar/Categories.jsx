import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
const Categori= [
  {name:"Equipos y Notebooks",link:"/Notebooks"},
  {name:"Procesadores",link:"/Procesadores"},
  {name:"Mothers",link:"/Mothers"},
  {name:"Placas de video",link:"/PlacasVideo"},
  {name:"Memorias Ram",link:"/Ram"},
  {name:"Almacenamiento",link:"/Almacenamiento"},
  {name:"Refrigeracion",link:"/Refri"},
  {name:"Gabinetes",link:"/Gabinetes"},
  {name:"Monitores",link:"/Monitores"},
  {name:"Perifericos",link:"/Perifericos"},
  {name:"Sillas Gamers",link:"/Sillas"},
]
const [isopen,setIsopen] = useState (false);

  return (
   <div className='mr-5'>
    <button onClick={()=> setIsopen(true)} className='hover:text-lime-500'>
      CATEGORIAS <ion-icon name="caret-down-outline"></ion-icon>
      </button>
    {
      isopen && (
        <div className='rounded-lg p-1 absolute flex flex-col items-center border-transparent border-solid top-[250px] sm:bg-gray-800 bg-gray-600 ml-20 sm:top-[100px] sm:ml-0'>
          {Categori.map((Categori)=>(
            <ul>
              <li className='mb-2 text-white hover:text-lime-500'>
                <Link key={Categori.name}  to={Categori.link}>{Categori.name}</Link>
              </li>
            </ul>
          ))}
          <button onClick={()=> setIsopen(false)} className='text-xl sm:text-white hover:text-lime-500'><ion-icon name="close-outline" ></ion-icon></button>
        </div>
      )
    }
   </div>
  )
}
export default Categories
