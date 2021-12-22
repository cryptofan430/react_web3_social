// IMPORT PACKAGE REFERENCES

import React from 'react';
import CopAvatar from '../images/cop_avatar.png';
// COMPONENT

const Endsin = () => (
    <div className='ends-in'>
        <p>Ends in:    5d   10h  30m  13s</p>
    </div>
);


export const CopTicket = () => (
    <div>
        <div className='ticket-board'>
            <Endsin />
            <div className='win-bored'>
                <p>Win Bored ape #4252</p>
            </div>
            <div className='content'>
                <p>We want everyone to have equal opportunity, 
                especially those whod normally wouldnt have a change or voice 
                in this space to own a iconic NFT</p>
            </div>
            <div className='cop-ticket-group'>
                <div className='cop-ticket-button-group'>
                    <input type={'number'}></input>
                    <button>Cop a ticket</button>
                </div>
                <div className='price'>

                    <div className='name'>Price</div>

                    <div className='value'> 0.0062
                    <i className="fab fa-bitcoin"></i>
                    </div>

                </div>
                <div className='odds'>
                    <div className='name'>Odds</div>

                    <div className='value'> 0.01%</div>
                

                </div>
            </div>
        </div>
        <div className='ticket-image'>
            <img src={ CopAvatar} alt ="avatar"></img>
        </div>
        
        
        
        <div className='avatar'>
            
        </div>
    </div>
);