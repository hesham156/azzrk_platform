import { createSlice,PayloadAction } from "@reduxjs/toolkit";
const data =JSON.parse(localStorage.getItem('state'))
console.log(data)
export const elementSlice = createSlice({
    name:"element",
    initialState:{
        global:{

        },
        logo:{
        img:data?.logo,
        logoWidth:data?.width
        },
        menu:{
           lnk:[{url:"sfsfddd",text:"sfsfsf"},{url:"sfsfsf",text:"ddsfsfd"}]
        },
        btns:{

        },
        type:"global",
    },
    reducers:{
        ctype:(state,action)=>{
            state.type=action.payload.type
        },
        clogo:(state,action)=>{
            state.logo.img=action.payload.logo
            state.logo.logoWidth=action.payload.logoWidth
       },
       saveLocal:(state)=>{
           localStorage.setItem("state",JSON.stringify({logo:state.logo.img,width:state.logo.logoWidth}))
       },
       cmenu:(state,action)=>{
           state.menu.lnk[action.payload.index].text=action.payload.text
           state.menu.lnk[action.payload.index].url=action.payload.url
       }
    }
})
console.log(data?.logo)
export const{clogo,saveLocal,ctype,cmenu} = elementSlice.actions
export default elementSlice.reducer