export const INC ="INC"
export const DEC ="DEC"
export const RES ="RES"



export function incCount(){
    return{
        type:INC
    }
}
export function decCount(){
    return{
        type:DEC
    }
}
export function resCount(){
    return{
        type:RES
    }
}