import React from 'react'
import Buttons from '@material-ui/core/Button';
import './Button.css';
function Button() {
    return (
        <div className='btnc'>
            <Buttons variant="outlined" color="secondary">
             Secondary
            </Buttons>
        </div>
    )
}

export default Button
