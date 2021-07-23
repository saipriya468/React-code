const incriment="incriment";
const decriment ="decriment";
let incr_action =()=>{
    return{
        
    type:"incriment"
}
}
let decr_action =()=>{
    return{
        
    type:"decriment"
    
}
}
export {incriment,decriment,incr_action,decr_action}