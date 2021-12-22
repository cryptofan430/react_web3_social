// IMPORT PACKAGE REFERENCES

import React from 'react';
import CopAvatar from '../images/cop_avatar.png';
import BinanceIcon from '../images/binance-coin-bnb-logo 1.png';
import Button from './common/button';
import NumberInput from './common/numberInput';

// COMPONENT

const Endsin = () => (
    <div className='ends-in'>
        <span >Ends in:</span><span style={{color: '#5042FE'}} > &nbsp;&nbsp;&nbsp;5d&nbsp;&nbsp; 10h &nbsp;&nbsp;30m &nbsp;&nbsp;13s</span>
    </div>
);


export const CopTicket = () => (
    <div className='cop-ticket'>
        
        <div className='ticket-board'>
            <Endsin />    
            <div className='win-bored' >
                <span >WIN </span><span style={{color: '#3D32C3', fontFamily: 'HorizonOutlined'}}> BORED APE </span><span>#4252</span>
            </div>
            <div className='content'>
                <p>We want everyone to have equal opportunity, 
                especially those whod normally wouldnt have a change or voice 
                in this space to own a iconic NFT</p>
            </div>
            <div className='cop-ticket-group'>
                <div className='cop-ticket-button-group'>
                    <NumberInput value={1} onChange={()=>{}}></NumberInput>
                    <Button button_type="tk_outlined" onClick = {() => {}}>Cop a ticket</Button>
                    
                </div>
                <div className='price'>

                    <div className='name'>Price</div>

                    <div className='value'> 0.0062
                        <span className='img'><img src={BinanceIcon}></img></span>
                        
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
            <div className="sold">
                <p>Tikkets sold:</p>
                <p><span>2,000</span>/10,000</p>
            </div>
        </div>
        
        
        
        <div className='avatar'>
            
        </div>
    </div>
);