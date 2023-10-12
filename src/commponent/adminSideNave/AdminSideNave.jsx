import React from 'react'
import style from "./adminSideNave.module.css"
import { useDispatch, useSelector } from 'react-redux';
import EditLogo from '../adminEdit/EditLogo';
import EditMenu from '../adminEdit/editmenu/EditMenu';
import EditGlobal from '../adminEdit/EditGlobal';
import EditBtns from '../adminEdit/EditBtns';
import { saveLocal } from '../../redux/elementSlice';
import { toast } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { Button } from '@mui/material';
const AdminSideNave = () => {
       const dispatch = useDispatch()
       const {type} = useSelector(state=>state.element)
       return (<div className='edit container'>
         <Button onClick={()=>{dispatch(saveLocal());toast.success("success",{rtl:"rtl"})}} variant="contained">save</Button>
         <Button onClick={()=>{dispatch(saveLocal());toast.success("success",{rtl:"rtl"})}} variant="contained"></Button>

        <Routes>
              <Route path='/' element={<EditGlobal/>}/>
              <Route path='/editlogo' element={<EditLogo save={()=>{dispatch(saveLocal());toast.success("success",{rtl:"rtl"})}}/>}/>
              <Route path='/editmenu' element={<EditMenu/>}/>
              <Route path='/editbtns' element={<EditBtns/>}/>
           
          </Routes>
     </div>)



}

export default AdminSideNave















//        switch(type){
//         case "logo":
//                 return (<div className='edit container'>
//                 <EditLogo save={()=>{dispatch(saveLocal());toast.success("success",{rtl:"rtl"})}}/>
//              </div>)
//         case "global":
//                 return (<div className='edit container'>
//                 <EditGlobal save={()=>{dispatch(saveLocal());toast.success("success",{rtl:"rtl"})}}/>
//              </div>)
//         case "menu":
//                 return (<div className='edit container'>
//                 <EditMenu save={()=>{dispatch(saveLocal());toast.success("success",{rtl:"rtl"})}}/>
//              </div>)
//         case "btns":
//                 return (<div className='edit container'>
//                 <EditBtns save={()=>{dispatch(saveLocal());toast.success("success",{rtl:"rtl"})}}/>
//              </div>)
//         default:
//                 return (<div className='edit container'>
//                 <EditGlobal save={()=>{dispatch(saveLocal());toast.success("success",{rtl:"rtl"})}}/>
//              </div>)
//        }