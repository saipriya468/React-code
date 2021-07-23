import {GOODMORNING,GOODEVENING} from "./message.actions";

let initalstate={
    message:"hello",
}
const messageKey= "messagecard";
let msgReducer=(state=initalstate,action)=>{
    //console.log("msg")
    switch (action.type) {
        case GOODMORNING:
            return {
                message:"goodmorning"
            }
            case GOODEVENING:
                return{
                    message:"GoodEvening",
                                   }
            
    
        default:
            return state;
    }
}
export {msgReducer,messageKey}