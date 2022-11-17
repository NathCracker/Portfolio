import React from 'react'

const Contacts = () => {
  return (
    <div className='flex justify-around items-center max-w-[1640px] min-h-[500px]'>
        <div className='text-center'>
            <h1 className='text-4xl'>Contact Me!</h1>
        </div>
        <div className=' flex justify-center items-center flex-col min-h-[400px]'>
            <form action="" className='w-full max-w-lg'>
                <div className='flex flex-wrap mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor="" className='block uppercase tracking-wide text-black text-xs font-bold mb-2'>
                            First Name
                        </label>
                        <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="grid-first-name" type="text" placeholder="Jane"/>
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor="" className='block uppercase tracking-wide text-black text-xs font-bold mb-2'>
                            Last Name
                        </label>
                        <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="grid-first-name" type="text" placeholder="Jane"/>
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className='w-full md:w-full px-3 mb-6 md:mb-0'>
                        <label htmlFor="" className='block uppercase tracking-wide text-black text-xs font-bold mb-2'>
                            Last Name
                        </label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <button className='text-white bg-black p-4 mx-auto rounded-lg'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contacts