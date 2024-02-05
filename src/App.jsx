import React from 'react'
import Navbar from './components/Navbar'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Home, Loader as homeLoader} from './pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import Login, {Action as loginAction} from './pages/Login'
import Signup, {Action as signupAction} from './pages/Signup'
import Account from './pages/Account'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path='/' element={<Home />} loader={homeLoader}/>
      <Route path='/login' element={<Login />} action={loginAction}/>
      <Route path='/signup' element={<Signup />} action={signupAction} />
      <Route element={<ProtectedRoute />}>
        <Route path='/account' element={<Account />} />
      </Route>
    </Route>
  ))
  return (
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
  )
}

export default App
