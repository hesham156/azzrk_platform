import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cmenu } from '../../redux/elementSlice'






const EditMenu = ({save}) => {
  const menIitems = useSelector((state=>state.element.menu.lnk))
  const dispatch = useDispatch()
  const [active,setActive] = useState(false)
 
  return (
    <div> <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap: "wrap"  }}> 
    <h5>تعديل المنيو</h5>
    <Button onClick={()=>{ save()}} variant="contained">save</Button>
    <div style={{width:"100%"}}>
    {menIitems?.map((item,index)=>{
      return <div className='item'> 
      <div onClick={()=>{setActive(index)}} className='menuItem' style={{width:"100%"}}>
          {item.text}
          <span></span>
      </div>
      <div className={(active===index?"active ":"hidden ")+'failed '}>
        <label htmlFor="">النص</label>
          <input type="text" placeholder={item.text} />
          <label htmlFor="">الرابط</label>
          <input type="text" placeholder={item.url}/>
      </div>
      </div>
    })}
          </div>

</div></div>
  )
}

export default EditMenu