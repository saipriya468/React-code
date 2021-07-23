import {incriment,decriment} from "./Counter2.actions";
let initialstate={
    counter:0
};
const counting="countermath";
let counter2reducer=(state=initialstate,action)=>{
    console.log("ooooo");
        switch(action.type) {
            case incriment:
                 return{
                     counter:state.counter+1,
                 }               
         
                 case decriment:
                     return{
                         counter:state.counter-1
                     }
            default:
                return state
        }
      
}
export {counting,counter2reducer};
