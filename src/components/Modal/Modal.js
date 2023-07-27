import React, { useState } from 'react'
import ModalBody from './ModalBody'

const Modal = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <p className='mt-4 text-center font-bold'>Modal Component</p>
      {
        !isModalOpen && (
          <div className='flex items-center justify-center'>
            <button 
              className='bg-blue-600 p-3 text-white rounded-md mt-5'
              onClick={() => setIsModalOpen(!isModalOpen)}  
            >Open Modal</button>
          </div>
        )
      }
      {
        isModalOpen && <ModalBody
            modalHeader="Modal Header"
            modalBody='Modal Body'
            modalFooter='Modal Footer'
            updateIsModelOpenVar = {isModalOpen}
            updateIsModalOpen = {setIsModalOpen}
        />
      }
    </div>
  )
}

export default Modal