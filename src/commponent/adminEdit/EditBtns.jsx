import { Button } from '@mui/material'
import React from 'react'

const EditBtns = ({save}) => {
  return (
    <div> <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}> 
    <h5>تعديل الازرار</h5>
    <Button onClick={()=>{ save()}} variant="contained">save</Button>
</div></div>
  )
}

export default EditBtns