/* eslint-disable no-undef */
import React, {useState } from 'react'
import PropTypes from 'prop-types';

// React Component
function AccItem(props) {
    const { item} = props;
    const [opened, setOpened ] = useState(0);
    let arrow_svg = <svg width='18' height='4' viewBox='0 0 18 4' fill='none' xmlns='http://www.w3.org/2000/svg' ><path d='M18 2H0' stroke='white' strokeWidth="3"></path></svg>;
    if (!opened ){
        arrow_svg = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M18 9H0" stroke="white"/><path d="M9 18L9 0" stroke="white" strokeWidth="3"/></svg>;
    }

    return <li className="acc_item">
        <div className="acc_header" onClick={()=> setOpened(!opened )}>
            <h3 >{item.title }</h3>
            <div className="arrow_div">
                {arrow_svg}
            </div>
        </div>
        <div className={opened ? "acc_content acc-open" : "acc_content acc-close"}>{item.description}</div>
       
    </li>
}

AccItem.propTypes = {
    item: PropTypes.object,
};

AccItem.defaultProps = {
    item: {}
}

export default AccItem;