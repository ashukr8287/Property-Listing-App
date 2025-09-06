import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import SignupForm from '../Pages/SignupForm '
import BuyPage from '../Pages/BuyPage'

function RoutePages() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/buy' element={<BuyPage/>}/>

    </Routes>
  )
}

export default RoutePages