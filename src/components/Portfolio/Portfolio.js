import React from 'react'
import picture from '../../assets/profile/profilepicture.jpg'

const Portfolio = () => {
  return (
    <div 
      className='grid grid-flow-col bg-gradient-to-bl from-[#1d2556] justify-center items-center'
    >
      <div className="col-span-3 mt-4 mb-4">
        <img
          src={picture}
          className='w-96 h-96 float-right'
        />
      </div>
      <div className='col-span-9 w-96 h-96 mt-4 mb-4 text-[#182153] bg-white p-4'>
        <p className='text-2xl font-bold mt-2'>Sai Preethi Pantangi</p>
        <p className='text-lg font-bold mt-2'>Graduate Student at George Mason University</p>
        <p className='mt-2'>571-435-2604</p>

        <div className='mt-4'>
          <p className='font-semibold'>Email:</p>
          <p>spantang@gmu.edu</p>
        </div>

        <div className='mt-4'>
          <p className='font-semibold'>Address:</p>
          <p>4272, Cotswolds Hill Lane, Faifax, Virginia - 22030</p>
        </div>

        <div className='mt-4'>
          <p className='font-semibold'>Date Of Birth:</p>
          <p>26th February 1998</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio