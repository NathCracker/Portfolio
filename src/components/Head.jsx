import React from 'react';
import myAvatar from './Avatar.png';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
const Head = () => {
  return (  
    <>
    <div>
        <div className='max-w-[1640px] mx-auto flex justify-center gap-16 p-3'>
            <div className='text-center mt-10'>
                <img src={myAvatar} alt="" className='bg-gradient-to-b from-gray-500 rounded-full max-h-60 my-10' />
                <h1 className='text-black text-3xl'>Nathaniel Faa</h1>
                <p className='text-black text-md my-5'>Web Developer and College Student</p>
            </div>
        </div>
        <div className='flex justify-center items-center text-4xl gap-16 m-5'>
            <a href='https://www.twitter.com/Nthdsntxst' target='_blank'><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com/in/nathaniel-faa-874a02211/" target='_blank'><AiFillLinkedin  /></a>
            <a href="https://github.com/NathCracker" target='_blank'><AiFillGithub /></a>
            <a href="https://www.facebook.com/profile.php?id=100013382197690" target='_blank'><BsFacebook className='text-3xl'/></a>
        </div>

    </div>
    </>
  )
}

export default Head