import React from 'react'
import PropTypes from 'prop-types';
import './style.scss';

// React Component
function Button(props) {
    const {
        button_type,
        width,
        height,
        fontSize,
        children,
        onClick} = props;
    return <button 
            onClick={onClick}
            className={button_type }
            style={{
                height,
                width,
                fontSize,
            }}>
            {children}
        </button>
}

Button.propTypes = {
    button_type: PropTypes.string,
    children: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    onClick: PropTypes.func,
    fontSize: PropTypes.string
};

Button.defaultProps = {
    width: "259px",
    height: "72px",
    children: "Connect",
    button_type: "tk_outlind",
    fontSize: "17px"
}

export default Button;