import { Button, Slider, styled } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clogo, saveLocal } from '../../redux/elementSlice';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { api } from '../../redux/api';
import useBase64 from '../../hooks/useBase64';

const EditLogo = () => {
  const {img,logoWidth,alt} = useSelector(state=>state.element.logo)
  const dispatch = useDispatch()
  const [imgWidth,setImgWidth] = useState(logoWidth)
  const {base64,setfile} = useBase64()

 const handelimg =(e)=>{ 
  setfile(e.target.files[0])
}
 
 useEffect(()=>{
    dispatch(clogo({logo:base64,logoWidth:imgWidth}))
    api("site", {
      "id":1,
       "name": "azz",
       "logo": base64,
       "width": imgWidth,
       "des": "",
   
 })
 },[imgWidth,base64])
 const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
 return(
  <div className='editLogo w-100 '>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}> 
              <h5>تعديل اللوجو</h5>
          </div>
          <div>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          <img width={imgWidth+"%"} src={base64?base64:img} alt={alt}/>
            <VisuallyHiddenInput onChange={(e)=>{handelimg(e)}} type="file" />
          </Button>
          </div>
          <div style={{paddingRight:"15px",paddingLeft: "15px"}}>
          <Slider  onChange={(e)=>{setImgWidth(e.target.value)}} value={imgWidth} aria-label="Default" valueLabelDisplay="auto" /> 
          </div>
  </div>
 )
}

export default EditLogo
// {/* <Button onClick={()=>{ save()}} variant="contained">save</Button> */}
