import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <>
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-3' >
        <h1 className='text-2xl'>Nathaniel <span className='font-bold'>Faa</span></h1>
        <div>
          <Link className='p-2 px-3 mx-2 rounded-sm text-black cursor-pointer' to='home' spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>

          <Link className='p-2 px-3 mx-2 rounded-sm text-black cursor-pointer' to='contacts' spy={true} smooth={true} offset={50} duration={500}>
            Contacts
          </Link>
        </div>
    </div>


    </>
  )
}

export default Navbar