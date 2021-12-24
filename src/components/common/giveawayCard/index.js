import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function GiveawayCard(props) {   
    return <div className="giveaway-component">
            <div className="details">
                <div className="title">{ props.title }</div>
                <div className="mobile-image">
                    <img src={ props.image } alt="giveawayimage" />
                </div>
                <div className="tikkets">
                    <p className="name">Tikkets</p>
                    <p className="value">{ props.tikkets_value }</p>
                </div>
                <div className="odds">
                    <p className="name">Odds</p>
                    <p className="value">{ props.odds_value }%</p>
                </div>
                <div className="total-price">
                    <p className="name">Total price</p>
                    <p className="value"><span>$</span>{ props.total_price_value }</p>
                </div>
            </div>
            <div className="image">
                <img src={ props.image } alt="giveawayimage" />
            </div>
        </div>   
}

GiveawayCard.propTypes = {
    title: PropTypes.string,
    tikkets_value: PropTypes.string,
    odds_value: PropTypes.string,
    total_price_value: PropTypes.string,
    image: PropTypes.node
}

export default GiveawayCard;