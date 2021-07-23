import {INCRCOUNTER,DECRCOUNTER} from "./Counter.actions";

let initialState={
counter:0
};
const counterkey = "countercard";

let counterReducer=(state=initialState, action)=>{
    console.log("testing")
    console.log(action)
    switch(action.type){
        case INCRCOUNTER:
        return{
        counter:state.counter+1,
        }
        case DECRCOUNTER:
        return{
            counter:state.counter-1,
        }
        default:
            return state;
};

};
export {counterReducer, counterkey}