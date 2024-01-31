import React from 'react'
import Main from '../components/Main'
import axios from 'axios'
import requests from '../Requests'
import { useLoaderData } from 'react-router-dom'

export const Loader = async () => {
  // const [movies, setMovies] = React.useState(() => [])
  let movies
  await axios.get(requests.requestPopular).then((response) => {
    movies = response.data.results
  })
  const movie = movies[Math.floor(Math.random() * movies.length)]

  return movie
}

export const Home = () => {
  const movie = useLoaderData()
  console.log(movie)
  return (
    <>
      <Main movie={movie} />
    </>
  )
}