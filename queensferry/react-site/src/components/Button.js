import React from 'react';
import './Button.css'

const ButtonStyles = [

    'btn--primary',
    'btn--outline'

]

const ButtonSizes = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    ButtonSize
}) => {
    const checkButtonStyle = ButtonStyles.includes(buttonStyle) ? buttonStyle : ButtonStyles[0];
    const checkbuttonSize = ButtonSizes.includes(ButtonSize) ? ButtonSize : ButtonSizes[0];

    return (
        <button className={'btn ${checkButtonStyle} ${checkbuttonSize}'}
            onClick={onClick} type={type}>
            {children}
        </button>
    )
}