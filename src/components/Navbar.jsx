import React from 'react'
import { Link, Outlet, redirect } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = UserAuth()
  const loggingout = async () => {
    await logOut()
    redirect("/signin")
  }

  return (
    <div>      
      <div className='flex items-center justify-between p-4 z-100 w-full max-sm:px-0'>
        <Link to='/'>
          <h1 className='text-red-600 text-[2rem] max-sm:text-[1.8rem] font-bold cursor-pointer z-10'>NETFLIX</h1>
        </Link>
        {user?.email ? 
        <div>
          <Link to='/account'>
            <button className='text-white pr-4 max-sm:text-[0.8rem] max-sm:px-3'>Account</button>
          </Link>
          <button className='bg-red-600 px-6 py-2 rounded text-white max-sm:text-[0.8rem] max-sm:px-3' onClick={loggingout}>Logout</button>
        </div> 
        :
        <div>
          <Link to='/login'>
            <button className='text-white pr-4 max-sm:text-[0.8rem] max-sm:px-3'>Sign in</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded text-white max-sm:text-[0.8rem] max-sm:px-3'>Sign up</button>
          </Link>
        </div>}

      </div>
      <Outlet />
    </div>
  )
}

export default Navbar