import React from 'react'
import style from './home.module.css'
import Nave from '../../commponent/nave/Nave'
import {Route, Routes } from 'react-router-dom'
import { Login } from '@mui/icons-material'
import Singup from '../singup/Singup'
import Employee from '../employee/Employee'
import Customer from '../customer/Customer'
const Home = () => {

  return (
    <div className={style.pages}>
          <Nave/>
         <div  className={style.page}>
           <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/singup' element={<Singup/>}/>
              <Route path='/employee' element={<Employee/>}/>
              <Route path='/customer' element={<Customer/>}/>
          </Routes>
    
    </div>
    </div>
  )
}

export default Home