import React from 'react'
import style from "./adminSideNave.module.css"
import { useSelector } from 'react-redux';
import EditLogo from '../adminEdit/EditLogo';
import EditMenu from '../adminEdit/EditMenu';
import EditGlobal from '../adminEdit/EditGlobal';
import EditBtns from '../adminEdit/EditBtns';
const AdminSideNave = () => {
  const {element} = useSelector(state=>state)
  switch(element){
    case "LOGO":
      return (<div className='edit editLogo'><EditLogo/></div>)
    case "MENU":
      return (<div className='edit editMenu'><EditMenu/></div>)
    case "GLOBAL":
      return (<div className='edit editGlobal'><EditGlobal/></div>)
    case "BTNS":
      return (<div className='edit editBtns'><EditBtns/></div>)
  }
}

export default AdminSideNave