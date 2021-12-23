import React from 'react'
import PropTypes from 'prop-types';
import './style.scss';

// React Component
function Pagination(props) {
    const {total, page, onClick } = props;
    return <ul className="tk_pagination">
        <li className="prev_li" onClick={()=> onClick("prev")}><a><i className="fa fa-angle-left"></i><span>Prev</span></a></li> 
        {Array.from(Array(total), (e, i) => {
            return <li key={i} onClick={()=> onClick(i + 1 )} className={(i + 1) == page ? "number_li active" : "number_li"}><a>{i + 1}</a></li>
        })}
        <li className="mobile_li">{page} / {total}</li>
        <li className="next_li" onClick={()=> onClick("next")}><a><span>Next</span><i className="fa fa-angle-right"></i></a></li>
    </ul>
}

Pagination.propTypes = {
    total: PropTypes.number,
    page: PropTypes.number,
    onClick: PropTypes.func
};

Pagination.defaultProps = {
    total: 1,
    page: 1
}

export default Pagination;