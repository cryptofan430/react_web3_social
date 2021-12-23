import React from 'react'
import PropTypes from 'prop-types';
import './style.scss';

// React Component
function Button(props) {
    const {
        button_type,       
        children,
        onClick} = props;
    return <button 
            onClick={onClick}
            className={button_type }
           >
            {children}
        </button>
}

Button.propTypes = {
    button_type: PropTypes.string,
    children: PropTypes.string,   
    onClick: PropTypes.func,    
};

Button.defaultProps = {  
    children: "Connect",
    button_type: "tk_outlind",   
}

export default Button;