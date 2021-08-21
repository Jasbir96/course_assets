import React, { useState } from 'react'
import {connect} from 'react-redux'
import {buyBat } from '../redux'
 function BatContainer(props) {
     const [number,setNumber] =useState(0);
    return (
        <div>
          <h2>Number of Bats- {props.numofBats}</h2>
          <input type='text' value={number} onChange={(e)=>setNumber(e.target.value)}/>
          <button onClick={()=>props.buyBat(number)}>Buy {number} Bat</button>  
        </div>
    )
}
const mapStateToProps = state=>{
    return {
        numofBats:state.bat.numofBats
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        buyBat:(number)=> dispatch(buyBat(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BatContainer);