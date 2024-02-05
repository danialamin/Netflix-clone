import React, { Suspense } from 'react'
import Main from '../components/Main'
import axios from 'axios'
import requests from '../Requests'
import { Await, defer, useLoaderData } from 'react-router-dom'
import Row from '../components/Row'
import LoadingComp from '../components/LoadingComp'

export const Loader = () => {  
  let popularMovies = axios.get(requests.requestPopular)
  let upcomingMovies = axios.get(requests.requestUpcoming)
  let trendingMovies = axios.get(requests.requestTrending)
  let topRatedMovies = axios.get(requests.requestTopRated)
  let horrorMovies = axios.get(requests.requestHorror)

  return defer({popularMovies: popularMovies, 
                upcomingMovies: upcomingMovies,
                trendingMovies: trendingMovies,
                topRatedMovies: topRatedMovies,
                horrorMovies: horrorMovies,})
}

export const Home = () => {
  const movies = useLoaderData()

  return (
    <>
      <Suspense> {/* prevent error */}
      <Suspense fallback={<LoadingComp />}>
        <Await resolve={movies.popularMovies}>
          {popularMovies => {
            const movies = popularMovies.data.results
            const movie = movies[Math.floor(Math.random() * movies.length)]

            return(
              <Main movie={movie} />
            )
          }}
        </Await>
      </Suspense>
      
      
      <Await resolve={movies.upcomingMovies}>
        {(upcomingMovies) => 
          <Row rowID='1' title='UpComing' movies={upcomingMovies.data.results} />
          }
      </Await>

      <Await resolve={movies.popularMovies}>
        {(popularMovies) => 
          <Row rowID='2' title='Popular' movies={popularMovies.data.results} />
        }
      </Await>

      <Await resolve={movies.trendingMovies}>
        {(trendingMovies) => 
          <Row rowID='3' title='Trending' movies={trendingMovies.data.results} />
        }
      </Await>

      <Await resolve={movies.topRatedMovies}>
        {(topRatedMovies) => {
          return(<Row rowID='4' title='Top Rated' movies={topRatedMovies.data.results} />)}
        }
      </Await>

      <Await resolve={movies.horrorMovies}>
        {(horrorMovies) => 
          <Row rowID='5' title='Horror' movies={horrorMovies.data.results} />
        }
      </Await>
      </Suspense>
    </>
  )
}