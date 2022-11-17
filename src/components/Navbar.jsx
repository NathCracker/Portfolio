import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-3'>
        <h1 className='text-2xl'>Nathaniel <span className='font-bold'>Faa</span></h1>
        <div>
          <button className='p-2 px-3 mx-2 rounded-sm text-black'>
            Home
          </button>

          <button className='p-2 px-3 mx-2 rounded-sm text-black'>
            Contacts
          </button>
        </div>
    </div>


    </>
  )
}

export default Navbar