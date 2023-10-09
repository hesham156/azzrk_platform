const element = (state={element:"GLOBAL"},action)=>{
   switch(action.type){
    case "LOGO": 
        return {...state,element:action.payload}
    case "MENU": 
        return {...state,element:action.payload}
    case "BTNS": 
        return {...state,element:action.payload}
    default:
        return state;
    }
}
export default element