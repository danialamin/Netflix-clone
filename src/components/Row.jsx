/* eslint-disable react/prop-types */
import React from 'react'
import Movie from "./Movie.jsx"
import {MdChevronLeft, MdChevronRight} from "react-icons/md"

const Row = (props) => { // props.title, props.movies, props.rowID
  const slideLeft = () => {
    document.getElementById(`slider${props.rowID}`).scrollLeft -= 300
  }
  const slideRight = () => {
    document.getElementById(`slider${props.rowID}`).scrollLeft += 300
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{props.title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute left-1 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={window.innerWidth < 370 ? 30: 40}/>
        <div id={`slider${props.rowID}`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar'>
          {props.movies.map((item) => 
            item.backdrop_path && <Movie item={item} key={item.title} />
          )}
        </div>
        <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute right-1 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={window.innerWidth < 370 ? 30: 40}/>
      </div>
    </>
  )
}

export default Row