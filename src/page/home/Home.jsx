import React from 'react'
import style from './home.module.css'
import Nave from '../../commponent/nave/Nave'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
          <Nave/>

    <div className={style.home}>
          <div className='container'>
            <Link to="/">home</Link>
          </div>
    </div>
    </>
  )
}

export default Home