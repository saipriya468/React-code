const INCRCOUNTER="INCRCOUNTER";
const DECRCOUNTER = "DECRCOUNTER";
let Incr_Action=()=>{
    return{
    type:"INCRCOUNTER",
}
}
let Decr_Action=()=>{
    return{
    type:"DECRCOUNTER",
}
}
export {DECRCOUNTER,INCRCOUNTER,Incr_Action,Decr_Action};