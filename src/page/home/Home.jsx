import React from 'react'
import style from './home.module.css'
import Nave from '../../commponent/nave/Nave'
import { Link } from 'react-router-dom'
import Slides from '../../commponent/slider/Slides'

const Home = () => {
  return (
    <>
          <Nave/>

    <div className={style.home}>
          <div className='container'>
            <Link to="/">home</Link>
            <Slides data={[{img:"",title:"",des:"",btns:[{url:"",text:""}]}]}/>
          </div>
    </div>
    </>
  )
}

export default Home