import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// React Component
function Ticket(props) {
    const {
        number,
        up_down,
        address,
        count} = props;
    return <div className={number > 5 ? "ticket_item dark" : "ticket_item light" }>
            <span className="tick_number">{number}</span><i className={up_down == "up" ? "fa fa-arrow-up" : "fa fa-arrow-down"}></i>
            <span className="tick_address">{address}</span><span className="tick_count">{count}</span>
        </div>
}

Ticket.propTypes = {
    number: PropTypes.string,
    up_down: PropTypes.string,
    address: PropTypes.string,
    count: PropTypes.string
};

Ticket.defaultProps = {
    number: 1,
    up_down: "up"
}

export default Ticket;