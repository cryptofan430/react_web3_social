import React from 'react'
import PropTypes from 'prop-types';
import './style.scss';
import propTypes from 'prop-types';

// React Component
function NumberInput(props) {
    const {

        width,
        height,
        fontSize,
        value,
        onChange} = props;
    return <input
            type='number'
            value={value}
            onChange={onChange}
            
            style={{
                height,
                width,
                fontSize,
            }}>
            
        </input>
}

NumberInput.propTypes = {
    
    height: PropTypes.string,
    width: PropTypes.string,
    onChange: PropTypes.func,
    value: propTypes.number,
    fontSize: PropTypes.string
};

NumberInput.defaultProps = {
    width: "109px",
    height: "72px",
    
    
    fontSize: "17px"
}

export default NumberInput;