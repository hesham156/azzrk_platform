import React from 'react'
import style from './home.module.css'
import Nave from '../../commponent/nave/Nave'
import { Link } from 'react-router-dom'
import Slides from '../../commponent/slider/Slides'
import img from "../../asset/imgs/Homepage-Pic3.png"
import { useDispatch, useSelector } from 'react-redux'
import { addval, dec, inc } from '../../redux/actions/userAction'
const Home = () => {
  const {count} = useSelector(state=>state)
  const dispatch = useDispatch()
  const adduser =()=>{
    inc(dispatch)
  }
  const deletu =()=>{
    dec(dispatch)
  }
  const addfval =(val)=>{
    addval(val,dispatch)
  }
  return (
    <div>
          <Nave/>
          <p>{count}</p>
         <button onClick={()=>{adduser()}}>in</button>
         <button onClick={()=>{deletu()}}>de</button>
         <button onClick={()=>{addfval(3)}}>val</button>
    <div className={style.home}>
          <div className='container'>
            <Link to="/">home</Link>
            <Slides data={[{img:img,title:"1",des:"2",btns:[{url:"3",text:"4"}]}]}/>
          </div>
    </div>
    </div>
  )
}

export default Home