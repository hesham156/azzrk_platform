import React, { useState } from 'react'
import style from './admin.module.css'
import AdminSideNave from '../../commponent/adminSideNave/AdminSideNave'
import Home from '../home/Home'

const Admin = () => {

  return (
    <div className={style.admin}>
      <AdminSideNave />
      <div className='adminHome' style={{width:"80%"}}>
         <Home/>
      </div>     
    </div>
  )
}

export default Admin