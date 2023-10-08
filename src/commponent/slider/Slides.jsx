import React from 'react'
import Slide from './Slide'

const Slides = ({data}) => {
  return (
    <div className='slides'>
      {data.map((res)=>{
        return <Slide slide={res}/>
      })}
      
    </div>
  )
}

export default Slides