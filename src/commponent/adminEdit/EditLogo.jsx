import { Slider } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { logo } from '../../redux/actions/elementActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const EditLogo = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState([]);

  const [imgWidth, setImgWidth] = useState(50);
  const element = useSelector(state=>state)
  const dispatch = useDispatch()
  useEffect(()=>{
     setData(JSON.parse(localStorage.getItem("state")))
    logo(dispatch,"LOGO",selectedImage?URL.createObjectURL(selectedImage):data.logoimg,imgWidth)
  },[selectedImage,imgWidth])
  return (
    <div className='container'>
      {selectedImage && (
      <div>
        <br />
        <button onClick={() => {    localStorage.setItem("state",JSON.stringify({logoimg:URL.createObjectURL(selectedImage),logoWidth:imgWidth,siteName:"Azzrk",siteDes:"Azzrk"}))
}}>Remove</button>
      </div>
    )}

    <br />
    <br />
    
    <input
      type="file"
      name="myImage"
      onChange={(event) => {
        console.log(event.target.files[0]);
        setSelectedImage(event.target.files[0]);
      }}
    />
    <input type='number' max={99} min={1} maxLength={2} placeholder={imgWidth} value={imgWidth} onChange={(e)=>setImgWidth(e.target.value)}/>
    <Slider  value={imgWidth} onChange={(e)=>{setImgWidth(e.target.value)}} aria-label="Default" valueLabelDisplay="auto" />
    <img
      alt="not found"
      width={imgWidth+"%"}
      src={selectedImage?URL.createObjectURL(selectedImage):element.logo}
      className='logoImg'
    />

    
  </div>
  )
}

export default EditLogo