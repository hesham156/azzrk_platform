import React from 'react'
import style from './nave.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clogo, ctype } from '../../redux/elementSlice'
const Nave = () => {
  const {img,logoWidth} = useSelector(state=>state.element.logo)
  const menIitems = useSelector((state=>state.element.menu.lnk))
  const dispatch = useDispatch()

    return (
    <div className={style.nave}>
        <div className="container d-flex align-items-center justify-content-center" >
            <div onClick={()=>{dispatch(ctype({type:"logo"}))}}   className={'logo w-25'}><img className='d-block m-auto' width={(logoWidth)+"%"} src={img}/></div>
            <div onClick={()=>{dispatch(ctype({type:"menu"}))}}  className={'menu w-50'}><ul>
            {menIitems?.map((item)=>{
      return <li><Link to={item.url}>{item.text}</Link></li>
    })}
              </ul></div>
            <div onClick={()=>{dispatch(ctype({type:"btns"}))}} className={'btns w-25'}><div><Link to="/connect">connect</Link></div></div>
        </div>
        
        </div>
  )
}

export default Nave