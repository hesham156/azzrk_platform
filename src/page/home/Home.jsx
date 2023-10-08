import React from 'react'
import style from './home.module.css'
import Nave from '../../commponent/nave/Nave'
import { Link } from 'react-router-dom'
import Slides from '../../commponent/slider/Slides'
import img from "../../asset/imgs/Homepage-Pic3.png"
const Home = () => {
  return (
    <>
          <Nave/>

    <div className={style.home}>
          <div className='container'>
            <Link to="/">home</Link>
            <Slides data={[{img:img,title:"1",des:"2",btns:[{url:"3",text:"4"}]}]}/>
          </div>
    </div>
    </>
  )
}

export default Home