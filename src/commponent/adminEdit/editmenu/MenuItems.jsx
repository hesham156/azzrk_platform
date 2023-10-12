import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { cmenu, rmenu } from '../../../redux/elementSlice'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'


const MenuItems = ({menu}) => {
    const [active,setActive] = useState(0)
const [lnk,setLnk] = useState(menu[active]?.url)
const [text,setTxt] = useState(menu[active]?.text)
const dispatch = useDispatch()
useEffect(()=>{
   dispatch(cmenu({index:active,text:text,url:lnk}))
},[text])
    const handelremove = (id)=>{
        localStorage.setItem('menu',JSON.stringify(menu))
        dispatch(rmenu({index:id}))
    
      }
  return (
    <>
     {menu?.map((item,index)=>{
      return <div key={index} className='item'> 
      {item?.active?<><div onClick={()=>{setActive(index)}} className='menuItem'  style={{width:"100%"}}>
          {item.text}
          <span onClick={()=>{handelremove(index)}}>X</span>
      </div>
      <div className={(active===index?"active ":"hidden ")+'failed '}>
        <label htmlFor="">النص</label>
          <input type="text" placeholder={item.text} onChange={(e)=>{setTxt(e.target.value); console.log(text);}} />
          <label htmlFor="">الرابط</label>
          <input type="text" placeholder={item.url} onChange={(e)=>{setLnk(e.target.value);console.log(lnk );}}/>
      </div></>:""}
      </div>
    })}
        </>
  )
}

export default MenuItems