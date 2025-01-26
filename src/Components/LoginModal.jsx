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



{/*import React from "react";

const LoginModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-96 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-xl font-bold text-gray-500"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;*/}