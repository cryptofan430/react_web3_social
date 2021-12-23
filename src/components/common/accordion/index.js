import React from 'react'
import PropTypes from 'prop-types';
import AccItem from './item';
import './style.scss';

// React Component
function Accordion(props) {
    const { data} = props;
    return <ul className="tk_accordion">
            {data.map((item, key )=> <AccItem key={key} item={item}></AccItem>)}
        </ul>
}

Accordion.propTypes = {
    data: PropTypes.array,
};

Accordion.defaultProps = {
    data: []
}

export default Accordion;