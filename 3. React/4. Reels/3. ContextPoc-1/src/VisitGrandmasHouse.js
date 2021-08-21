import React from 'react'
import {Context} from './Context'
import ContextExclamation from './ContextExclamation'
function VisitGrandmasHouse() {   
    return (
        <Context.Provider value='greeting'>
            <h1>This is the grandma's house</h1>
            {<ContextExclamation/>}
        </Context.Provider>
    )
}
export default VisitGrandmasHouse