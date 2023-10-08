import React from 'react'
import style from './admin.module.css'
import AdminSideNave from '../../commponent/adminSideNave/AdminSideNave'

const Admin = () => {
  return (
    <div className={style.admin}>
      <AdminSideNave/>
      <iframe src="http://localhost:3000/" frameborder="0"></iframe>
     
    </div>
  )
}

export default Admin