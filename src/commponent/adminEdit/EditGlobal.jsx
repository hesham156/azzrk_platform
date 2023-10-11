import { Button } from '@mui/material'
import React from 'react'

const EditGlobal = ({save}) => {
  return (
    <div> <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}> 
    <h5>تعديل عام</h5>
    <Button onClick={()=>{ save()}} variant="contained">save</Button>
</div></div>
  )
}

export default EditGlobal