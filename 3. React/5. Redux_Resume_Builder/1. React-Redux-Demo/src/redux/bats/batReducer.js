const BUY_BAT = 'BUY_BAT'
const initialSstate = {
    numofBats:10
}
const BatReducer = (state = initialSstate, action)=>
{
     switch(action.type)
     {
         case BUY_BAT:
             return {...state,numofBats:state.numofBats-action.payload}
             default:
                 return state
     }
}
export default BatReducer