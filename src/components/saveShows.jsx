import React, { useEffect } from 'react'
import {MdChevronLeft, MdChevronRight} from "react-icons/md"
import {UserAuth} from '../context/AuthContext'
import { db } from '../firebase'
import { onSnapshot, query, collection, where, getDocs, updateDoc, doc, arrayUnion } from 'firebase/firestore'
import { AiOutlineClose } from "react-icons/ai"

const SavedShows = () => {
  const slideLeft = () => {
    document.getElementById(`slider`).scrollLeft -= 300
  }
  const slideRight = () => {
    document.getElementById(`slider`).scrollLeft += 300
  }
  const [movies, setMovies] = React.useState([])
  const {user} = UserAuth()

  useEffect(() => {
    const q = query(collection(db, "users"), where('email', '==', user?.email))
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setMovies(doc.data()?.savedShows)
      })
    })
  }, [user?.email])

  const DeleteShow = async (passedID) => {
   try {
    let movieRef
    var result = movies.filter((item) => item.id !== passedID)
    const q = query(collection(db, "users"), where('email', '==', user?.email))
    const querySnapshot = await getDocs(q)
    querySnapshot.docs.map((document) => {
      movieRef = doc(db, 'users', document.id)
    })
    await updateDoc(movieRef, {
      savedShows: result
    })

  } catch(error) {
    console.log(error)
  }}

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute left-1 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={window.innerWidth < 370 ? 30: 40}/>
        <div id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar'>
          {movies?.map((item) => 
            <div key={item.title} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative m-2'>
              <img src={`https://image.tmdb.org/t/p/w500/${item.img}`} alt={item.title} />
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 text-white opacity-0 hover:opacity-100'>
                <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full w-full text-center px-1'>{item.title}</p>
                <p onClick={() => DeleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
              </div>
            </div>
          )}
        </div>
        <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute right-1 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={window.innerWidth < 370 ? 30: 40}/>
      </div>
    </>
  )
}

export default SavedShows