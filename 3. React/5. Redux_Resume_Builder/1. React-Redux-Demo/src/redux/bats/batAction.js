const BUY_BAT = 'BUY_BAT'
export const buyBat = (number=1)=>{
    return {
        type:BUY_BAT,
        payload:number
    }
}