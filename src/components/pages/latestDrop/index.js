// IMPORT PACKAGE REFERENCES

import React from 'react';

import '../../../styles/components/latest_drop.scss'
import { CopTicket } from './CopTicket';
import { WalletRank } from './WalletRank';
import Button from '../../common/button';
// COMPONENT

const Copped = () => (
    
    <div className="horizon copped">
        <div>
            <span >YOU </span><span style={{fontFamily: 'Horizon'}}> COPPED #252</span>
        </div>
        <div>
            <span>TIKKETS</span>
        </div>
        
        
    </div>
);

const Chance = () => (
    
    <div className="horizon chance">
         <div>
            <span style={{fontFamily: 'Horizon'}}>WITH A</span><span > 1% </span><span style={{fontFamily: 'Horizon'}}>CHANCE</span>
        </div>
        <div>
            <span style={{fontFamily: 'Horizon'}}>OF </span><span>WINNING</span>
        </div>
        
        
        
    </div>
);

const Share = () => (
    
    <div className="horizon share">
         <div>
            <span >SHARE </span><span style={{fontFamily: 'Horizon'}}> TO WIN </span>
        </div>
        <div>
            <span >FREE </span><span style={{fontFamily: 'Horizon'}}>TICKETS</span>
        </div>

        <Button button_type="tk_outlined" width="352px" height="63px" fontSize = "22px" onClick = {() => {}}>Sure, give me free tikkets</Button>      
        
        
    </div>
);

function LatestDrop () {
    
 return <main className="p-3 animated fadeIn">
        
            <CopTicket />
        
        
            <WalletRank />

            <Copped/>
            
            <Chance></Chance>

            <Share/>
        
    </main>
}

export  {LatestDrop};