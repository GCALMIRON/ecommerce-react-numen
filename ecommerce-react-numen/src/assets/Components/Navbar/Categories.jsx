import React from 'react'
import { useState } from 'react';

const Categories = () => {
const Categori= [
  {name:"Equipos y Notebooks",link:"/"},
  {name:"Procesadores",link:"/"},
  {name:"Mothers",link:"/"},
  {name:"Placas de video",link:"/"},
  {name:"Memorias Ram",link:"/"},
  {name:"Almacenamiento",link:"/"},
  {name:"Refrigeracion",link:"/"},
  {name:"Gabinetes",link:"/"},
  {name:"Monitores",link:"/"},
  {name:"Perifericos",link:"/"},
  {name:"Sillas Gamers",link:"/"},
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
              <li key={Categori.name} className='mb-2 text-white hover:text-lime-500'>
                <a href={Categori.link}>{Categori.name}</a>
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
