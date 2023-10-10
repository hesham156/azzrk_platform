const data = JSON.parse(localStorage.getItem("state"))
console.log(data)
const element = (state={element:"GLOBAL",logo:data?.logoimg,logoWidth:50,siteName:"Azzrk",siteDes:"Azzrk"},action)=>{
   switch(action.type){
    case "LOGO": 
    const data = JSON.parse(localStorage.getItem("state"))
    console.log(data)
         console.log(action.payload.logoWidth)
        return {...state,element:action.payload.elm,logo:data?.logoimg,logoWidth:action.payload.logoWidth}
    case "MENU": 
        return {...state,element:action.payload}
    case "BTNS": 
        return {...state,element:action.payload}
    default:
        return state;
    }
}
export default element