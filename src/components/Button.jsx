import React from "react";
import './Button.css'

const Button = props => {
    let clsBtn  = 'Button '
    clsBtn += props.equalBtn ? 'equalBtn' : ''
    clsBtn += props.operation ? 'operation' : ''
    clsBtn += props.double ? 'double' : ''
    clsBtn += props.triple ? 'triple' : ''
    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={clsBtn}>
            {props.label}
        </button>
    )
}

export default Button