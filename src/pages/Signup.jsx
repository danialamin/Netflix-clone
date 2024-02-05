import React from 'react';
import { Form, Link, redirect } from 'react-router-dom';
import { signUp } from '../context/AuthContext';

export const Action = async ({request, params}) => {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")

  try {
    await signUp(email, password)
    return redirect('/')
  } catch (err) {
    return err
  }
}

const Signup = () => {

  return (
    <>
      <div className='w-full h-[85.7526vh]'>
        <img
          className='hidden sm:block absolute w-full h-[85.7526vh] object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-[10] left-0 w-full h-full'></div>
        <div className='fixed w-full px-4 py-4 z-50'>
          <div className='max-w-[450px] h-[450px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <Form
                method='post'
                className='w-full flex flex-col py-4'
              >
                <input
                name='email'
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  name='password'
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                  Sign Up
                </button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8 text-center'>
                  <span className='text-gray-600'>
                    Already subscribed to Netflix?
                  </span>{' '}
                  <Link to='/login' className='whitespace-nowrap'>Sign In</Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;