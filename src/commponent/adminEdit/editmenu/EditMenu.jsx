import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import MenuItems from './MenuItems'
import { useDispatch } from 'react-redux'
import { addmenu } from '../../../redux/elementSlice'

const EditMenu = ({save}) => {
  const menIitems = useSelector((state=>state.element.menu.lnk))
  const dispatch = useDispatch()

  return (
    <div> <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap: "wrap"  }}> 
    <h5>تعديل المنيو</h5>
    <div style={{width:"100%"}}>
      <MenuItems menu={menIitems}/>
      <select onChange={(e)=>{dispatch(addmenu({index:e.target.value}))}}>
        <option>sele</option>
        {menIitems.map((item,index)=>{
         if(!item.active) {return <option key={index} value={index}>{item.text}</option>}
        })}
      </select>
       {menIitems?.length===0?<button>Add New</button>:""}
         </div>

</div></div>
  )
}

export default EditMenu

    // {/* <Button onClick={()=>{ save()}} variant="contained">save</Button> */}
