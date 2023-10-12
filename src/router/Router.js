import React from 'react'
import { Routes,Route } from 'react-router-dom'
import {Admin, Home} from '../page/index'
const Router = () => {
  return (
          <Routes>
              <Route path='/*' element={<Home/>}/>
              <Route path='/admin/*' element={<Admin/>}/>
          </Routes>
    )
}

export default Router