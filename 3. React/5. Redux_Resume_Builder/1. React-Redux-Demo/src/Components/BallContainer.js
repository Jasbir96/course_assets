import React from 'react'
import {connect} from 'react-redux'
import {buyBall } from '../redux/balls/ballActions'
 function BallContainer(props) {
     console.log(props.buyBall)
    return (
        <div>
          <h2>Number of Balls - {props.numofBalls}</h2>
          <button onClick={props.buyBall}>Buy Balls</button>  
        </div>
    )
}
const mapStateToProps = state=>{
    return {
        numofBalls:state.ball.numofBalls
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        buyBall:()=>{
            console.log("This is executed");
            return dispatch(buyBall())
    }
}
}
export default connect(mapStateToProps,mapDispatchToProps)
(BallContainer);