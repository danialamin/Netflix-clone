/* eslint-disable react/prop-types */
import React from 'react'

const Main = (props) => {

  const truncateString = (str, num) => {
    if(str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  }

  return (
    <div className='w-full h-[450px] text-white'>
      <div className='w-full h-[450px] relative'>
        <div className="w-full h-[450px] absolute bg-gradient-to-r from-black"></div>
        <img className="w-full h-full object-cover md:object-fill" src={`https://image.tmdb.org/t/p/original/${props.movie?.backdrop_path}`} alt={props.movie?.title} />

        <div className='absolute w-full top-[20%] p-4 md:p-8 max-sm:px-2'>
          <h1 className='text-3xl max-sm:text-2xl md:text-5xl font-bold'>{props.movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 max-sm:px-3 max-sm:text-[0.8rem]'>Play</button>
            <button className='border text-white border-gray-300 py-2 px-5 ml-4 max-sm:px-3 max-sm:text-[0.8rem]'>Watch Later</button>
          </div>

          <p className='text-gray-400 text-sm max-sm:text-[0.8rem]'>Released: {props.movie?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] max-sm:text-[0.9rem]'>{truncateString(props.movie?.overview, 150)}</p>
        </div>
      </div>
    </div>
  )
}

export default Main