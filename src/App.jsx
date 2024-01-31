import React from 'react'
import Navbar from './components/Navbar'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Home, Loader as homeLoader} from './pages/Home'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path='/' element={<Home />} loader={homeLoader}/>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App
