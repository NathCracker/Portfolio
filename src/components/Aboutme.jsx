import React from 'react'

const Aboutme = () => {
  return (
    <div>
        <div className='max-w-[1640px] flex justify-center items-start gap-16 p-3 mx-auto max-sm:flex-col max-md:flex-col'>
            <h1 className='text-center text-3xl'>
                ABOUT ME
            </h1>
        </div>

        <div className='flex justify-center py-5'>
            <p className=' max-w-[600px]'>My journey began on 7th grade when I first started to use my moms laptop. 
                I was searching for careers and found web development. 
                Since then I have always been a web development enthusiast. 
                I tried game development and made my very first roblox game, 
                I have also tried windows application development and made my own 
                personal DLL injector. I still continue walking this path and fortunately
                land a good job in a company that will let me hone my skills.
            </p>
        </div>

    </div>

  )
}

export default Aboutme