import React from 'react';
import './Button.css';
/*import { Link } from 'react-router-dom';*/

const STYLES = ['btn--primary' , 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button= ({
    childern,
    type,
    onClick,
    buttonStyle,
    buttonSize
})=> {
    const checkButtonStyle = STYLES.include(buttonStyle)? buttonStyle: STYLES[0]

    const checkButtonSize = SIZES.include(buttonSize)? buttonSize: STYLES[0]

    return(
        <Link to='/' className='btn-mobile'>
            <button 
            className={'btn $ {checkButtonstyle} $ {checkButtonSize}'}
            onClick={onClick}
            type={type}
            >
              {childern}  
            </button>

            <Button>Get Started</Button>
    </Link>
    )
};