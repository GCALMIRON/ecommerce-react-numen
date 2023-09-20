import React from 'react'
import { useState } from 'react'


const Modal = () => {

const [isopen,setIsopen] = useState(false)

  return (
    <>
      <button onClick={()=> setIsopen(true)} className='px-6 py-2 text-white bg-gray-800 rounded-lg ml-60 mt-60 hover:bg-lime-500 hover:text-gray-800'>
        Abrir Modal
      </button>
      {
        isopen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm'>
            <div className='flex flex-col items-center justify-center gap-5 p-5 bg-white rounded'>
                <button onClick={()=> setIsopen(false)} className='px-6 py-2 text-white bg-gray-800 rounded-lg hover:bg-lime-500 hover:text-gray-800'>
                    Cerrar Modal
                </button>
            </div>
        </div>
        )
      }
      
    </>
  )
}

export default Modal
