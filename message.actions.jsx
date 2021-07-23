const GOODMORNING = "GOODMORNING";
const GOODEVENING = "GOODEVENING";
let sayGM=()=>{
    return{
        type:"GOODMORNING"
        
    }
}
let sayGE=()=>{
    return{
        type:"GOODEVENING"
    }
}
export {GOODMORNING,GOODEVENING,sayGM,sayGE};