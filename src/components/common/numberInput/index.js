import React from 'react'
import PropTypes from 'prop-types';
import './style.scss';

// React Component
function NumberInput(props) {
    const {
        width,
        height,
        fontSize,
        value,
        onIncrease,
        onDecrease
        
        } = props;
    return <div className='number-input'
            
            style={{
                height,
                width,
                fontSize,
            }}>
            <div className='number'>{value}</div>
            
            <div className='arrow-group'>
                <a onClick={onIncrease}><i className="arrow up"></i></a>
                <a onClick={onDecrease}><i className="arrow down"></i></a>
            </div>
        </div>
}

NumberInput.propTypes = {
    value: PropTypes.number,
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func,
    height: PropTypes.string,
    width: PropTypes.string,
    fontSize: PropTypes.string
};

NumberInput.defaultProps = {
    width: "109px",
    height: "72px",
    fontSize: "17px"
}

export default NumberInput;