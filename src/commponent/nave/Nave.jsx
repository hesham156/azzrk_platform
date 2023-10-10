import React from 'react'
import style from './nave.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { btns, logo, menu } from '../../redux/actions/elementActions'
const Nave = () => {
  const element = useSelector(state=>state)
  const dispatch = useDispatch()
 console.log(element)
  return (
    <div className={style.nave}>
        <div className="container d-flex align-items-center justify-content-center" >
            <div onClick={()=>logo(dispatch,"LOGO")}  className={'logo w-25'}><img  width={(element.logoWidth)+"%"} src={element.logo}/></div>
            <div onClick={()=>menu(dispatch,"MENU")} className={'menu w-50'}><ul><li><Link to="/">Home</Link></li><li><Link to="/about">about</Link></li></ul></div>
            <div onClick={()=>btns(dispatch,"BTNS")} className={'btns w-25'}><div><Link to="/connect">connect</Link></div></div>
        </div>
        
        </div>
  )
}

export default Nave