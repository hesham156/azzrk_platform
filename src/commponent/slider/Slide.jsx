import React from 'react'

const Slide = ({slide}) => {
  return (
    <div className='slide'>
        <img data-aos="fade-left"  src={slide.img}/>
        
    </div>
  )
}

export default Slide