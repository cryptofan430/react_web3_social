import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Nft(props) {   
    return <div className="nft">
            <img src={props.image} alt="maestro" />
            <p className="name">{props.names}</p>
            <div className="social-links">
                <p className="twitter"><i className="fab fa-twitter"></i></p>
                <p className="instagram"><i className="fab fa-instagram"></i></p>
            </div>
        </div>    
}

Nft.propTypes = {
    names: PropTypes.string,
    image: PropTypes.node
}

export default Nft;