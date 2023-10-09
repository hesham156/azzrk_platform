import { BTNS, GLOBAL, LOGO, MENU } from "./types"

export const logo =(dispatch,elm)=>{
    return dispatch({type:LOGO,payload:elm})

}
export const menu =(dispatch,elm)=>{
    return dispatch({type:MENU,payload:elm})

}
export const btns =(dispatch,elm)=>{
    return dispatch({type:BTNS,payload:elm})

}