import { BTNS, GLOBAL, LOGO, MENU } from "./types"

export const logo =(dispatch,elm,logo,width)=>{
    return dispatch({type:LOGO,payload:{elm:elm,logo:logo,logoWidth:width}})

}
export const menu =(dispatch,elm)=>{
    return dispatch({type:MENU,payload:elm})

}
export const btns =(dispatch,elm)=>{
    return dispatch({type:BTNS,payload:elm})

}