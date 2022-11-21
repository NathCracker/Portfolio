import React from 'react'

const Contacts = () => {
  return (
    <div className='flex justify-around items-center max-w-[1640px] min-h-[500px]' id='contacts'>
        <div className='text-center'>
            <h1 className='text-4xl'>Contact Me!</h1>
        </div>
        <div className=' flex justify-center items-center flex-col min-h-[400px]'>
            <form action="https://formspree.io/f/mpznndnz" method='POST' className='w-full max-w-lg'>
                <div className='flex flex-wrap mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor="First name" className='block uppercase tracking-wide text-black text-xs font-bold mb-2'>
                            First Name
                        </label>
                        <input name='Firstname' className='appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="grid-first-name" type="text" placeholder="First Name"/>
                    </div>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor="Lastname" className='block uppercase tracking-wide text-black text-xs font-bold mb-2'>
                            Last Name
                        </label>
                        <input name='Last name' className='appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="grid-first-name" type="text" placeholder="Last Name"/>
                        
                    </div>
                    <div className='w-full md:w-2/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor="Email" className='block uppercase tracking-wide text-black text-xs font-bold mb-2'>
                            Email
                        </label>
                        <input name='Email' className='appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="grid-first-name" type="text" placeholder="Email"/>
                        
                    </div>
                    <div className='w-full md:w-full px-3 mb-6 md:mb-0'>
                        <label htmlFor="Message" className='block uppercase tracking-wide text-black text-xs font-bold mb-2'>
                           Message
                        </label>
                        <textarea name='Message' id="message" rows="4" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' placeholder="Write your thoughts here..."></textarea>
                    
                    </div>
                    <button className='text-white bg-black p-4 mx-auto rounded-lg m-2'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contacts