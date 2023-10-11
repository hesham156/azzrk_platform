import React from 'react'
import style from "./adminSideNave.module.css"
import { useDispatch, useSelector } from 'react-redux';
import EditLogo from '../adminEdit/EditLogo';
import EditMenu from '../adminEdit/EditMenu';
import EditGlobal from '../adminEdit/EditGlobal';
import EditBtns from '../adminEdit/EditBtns';
import { saveLocal } from '../../redux/elementSlice';
import { toast } from 'react-toastify';
const AdminSideNave = () => {
       const dispatch = useDispatch()
       const {type} = useSelector(state=>state.element)
       switch(type){
        case "logo":
                return (<div className='edit container'>
                <EditLogo save={()=>{dispatch(saveLocal());toast.success("success",{rtl:"rtl"})}}/>
             </div>)
        case "global":
                return (<div className='edit container'>
                <EditGlobal save={()=>{dispatch(saveLocal());toast.success("success",{rtl:"rtl"})}}/>
             </div>)
        case "menu":
                return (<div className='edit container'>
                <EditMenu save={()=>{dispatch(saveLocal());toast.success("success",{rtl:"rtl"})}}/>
             </div>)
        case "btns":
                return (<div className='edit container'>
                <EditBtns save={()=>{dispatch(saveLocal());toast.success("success",{rtl:"rtl"})}}/>
             </div>)
        default:
                return (<div className='edit container'>
                <EditGlobal save={()=>{dispatch(saveLocal());toast.success("success",{rtl:"rtl"})}}/>
             </div>)
       }
    
   
}

export default AdminSideNave