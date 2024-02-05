/* eslint-disable react/prop-types */
import React from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext"
import { db } from '../firebase';
import { arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';

const Movie = (props) => {
  const [like, setLike] = React.useState(false)
  const [saved, setSaved] = React.useState(false)
  const {user} = UserAuth()

  const saveShow = async () => {
    if (user) {
      setLike(prev => !prev)
      setSaved(true)
      const q = query(collection(db, "users"), where('email', '==', user?.email))
      const snapshot = await getDocs(q)
      snapshot.docs.map(async (document) => {
        const docRef = doc(db, 'users', document.id)
        await updateDoc(docRef, {
          savedShows: arrayUnion({id: props.item.id, title: props.item.title, img: props.item.backdrop_path}) //arrayUnion is used so that new object will be appended to the savedShows array
        })
      })
      
    } else{
      alert('Please log in to save a movie')
    }
  }

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative m-2'>
      <img src={`https://image.tmdb.org/t/p/w500/${props.item.backdrop_path}`} alt={props.item.title} />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 text-white opacity-0 hover:opacity-100'>
        <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full w-full text-center px-1'>{props.item.title}</p>
        <p >{like ? <FaHeart className='absolute top-4 left-4 max-md:left-1 max-md:top-1 text-gray-300' onClick={() => setLike(false)} /> : <FaRegHeart onClick={saveShow} className='absolute top-4 left-4 text-gray-300 max-md:left-1 max-md:top-1' />}</p>
      </div>
    </div>
  )
}

export default Movie