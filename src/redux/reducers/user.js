const user = (state={count:4 },action)=>{
    switch (action.type){
        case "ADDUSER":
            return {...state,count:state.count+1};
            break;
        case "DELETUSER":
            return {...state,count:state.count-1};
            break;
        case "ADDVAL":
            
            return {...state,count:state.count+action.payload};
            break;
        default:
            return state;
    }
}
export default user