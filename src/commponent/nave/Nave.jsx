import React from 'react'
import style from './nave.module.css'
import logo from '../../asset/imgs/02-e1678609966788.png'
import { Link } from 'react-router-dom'
const Nave = () => {
  return (
    <div className={style.nave}>
        <div className="container d-flex align-items-center justify-content-center">
            <div className={'logo w-25'}><img width="50px" src={logo}/></div>
            <div className={'menu w-50'}><ul><li><Link to="/">Home</Link></li><li><Link to="/about">about</Link></li></ul></div>
            <div className={'btns w-25'}><div><Link to="/connect">connect</Link></div></div>
        </div>
        
        </div>
  )
}

export default Nave