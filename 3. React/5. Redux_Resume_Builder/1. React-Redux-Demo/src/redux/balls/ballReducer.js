const BUY_BALL = 'BUY_BALL'
const initialSstate = {
    numofBalls:20
}
const BallReducer = (state = initialSstate, 
    action)=>
{
     switch(action.type)
     {
         case BUY_BALL:
             return {...state,numofBalls:state.numofBalls-1}
             default:
                 return state
     }
}
export default BallReducer;