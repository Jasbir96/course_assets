import React from 'react'
import {Context} from './Context'
import {useContext} from 'react';
function ContextExclamation() {
    const word= useContext(Context);
    return (

        <span>{word}</span>
        
    )
}

export default ContextExclamation
