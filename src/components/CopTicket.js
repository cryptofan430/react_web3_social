// IMPORT PACKAGE REFERENCES

import React from 'react';

// COMPONENT

const Endsin = () => (
    <div className='ends-in'>
        <p>Ends in:    5d   10h  30m  13s</p>
    </div>
);

export const CopTicket = () => (
    <div className='cop-ticket'>
        <Endsin></Endsin>
        <div className='win-bored'>
            <p>Win Bored ape #4252</p>
        </div>
        <div className='content'>
            <p>We want everyone to have equal opportunity, 
            especially those whod normally wouldnt have a change or voice 
            in this space to own a iconic NFT</p>
        </div>
        <div className='avatar'>
            <img src='../images/cop_avatar.png'></img>
        </div>
    </div>
);