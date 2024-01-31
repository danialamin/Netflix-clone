import React from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between p-4 z-100 w-full absolute'>
        <h1 className='text-red-600 text-[2rem] font-bold cursor-pointer z-10'>NETFLIX</h1>
        <div>
          <button className='text-white pr-4'>Sign in</button>
          <button className='bg-red-600 px-6 py-2 rounded text-white'>Sign up</button>
        </div>
      </div>

      <Outlet />
    </>
  )
}

export default Navbar