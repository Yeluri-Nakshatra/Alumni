import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='flex w-full lg:h-screen h-[70vh] justify-center items-center '>
    <div className='flex flex-col gap-4 w-[90%] md:w-[440px] rounded-md shadow-md shadow-blue-950 py-4 px-8'>
        <div className='text-3xl text-center font-bold text-blue-950'>Login</div>
        
        <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="mail" className='font-semibold text-blue-950 '>E-mail</label>
                <input type="email" placeholder='examplename@gmail.com' className='w-full p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="pwd" className='font-semibold text-blue-950 '>Password</label>
                <input type="password" placeholder='........' className='w-full p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="phn" className='font-semibold text-blue-950 '>Phone number</label>
                <input type="number" maxLength={10} placeholder='1234-567-890' className='w-full p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950'/>
            </div>

        </form>
        <hr />
        <div className='text-center'>
            Don't have an account? <Link to='/register' className='text-blue-950 font-semibold cursor-pointer'>Register</Link>
        </div>
        

       
        


    </div>

</div>
  )
}

export default Login