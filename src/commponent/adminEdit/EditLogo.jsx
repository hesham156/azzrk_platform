import { Button, Slider, styled } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clogo, saveLocal } from '../../redux/elementSlice';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const EditLogo = () => {
  const {img,logoWidth} = useSelector(state=>state.element.logo)
  const dispatch = useDispatch()
  const [newImg,setImg] = useState(img)
  const [imgWidth,setImgWidth] = useState(logoWidth)

 useEffect(()=>{
    dispatch(clogo({logo:newImg,logoWidth:imgWidth}))
 },[imgWidth,newImg])
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
              <img width={imgWidth+"%"} src={newImg?newImg:""}/>
            <VisuallyHiddenInput onChange={(e)=>{setImg(URL.createObjectURL(e.target.files[0]))}} type="file" />
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
