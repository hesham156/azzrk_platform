import React from 'react'
import { Routes,Route } from 'react-router-dom'
import {Admin, Customer, Employee, Home, Login, Singup} from '../page/index'
const Router = () => {
  return (
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/singup' element={<Singup/>}/>
              <Route path='/employee' element={<Employee/>}/>
              <Route path='/customer' element={<Customer/>}/>
              <Route path='/admin' element={<Admin/>}/>
          </Routes>
    )
}

export default Router