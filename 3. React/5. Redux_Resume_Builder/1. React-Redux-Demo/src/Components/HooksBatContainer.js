import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyBat } from '../redux';
function HooksBatContainer() {
    const numOfBats = useSelector(state => state.bat.numofBats);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Num of Bats- {numOfBats} </h2>
            <button onClick={()=>dispatch(buyBat())}>Buy Bat</button>
        </div>
    )
}
export default HooksBatContainer;