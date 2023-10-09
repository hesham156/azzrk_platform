import React from 'react'
import style from "./adminSideNave.module.css"
import { useSelector } from 'react-redux';
const AdminSideNave = () => {
  const {element} = useSelector(state=>state)
  switch(element){
    case "LOGO":
      return (<div className='edit editLogo'>logo</div>)
    case "MENU":
      return (<div className='edit editMenu'>menu</div>)
    case "GLOBAL":
      return (<div className='edit editGlobal'>global</div>)
    case "BTNS":
      return (<div className='edit editBtns'>btns</div>)
  }
}

export default AdminSideNave