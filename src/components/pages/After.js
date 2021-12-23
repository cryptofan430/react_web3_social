// IMPORT PACKAGE REFERENCES
import React from 'react';
import '../../styles/components/latest_drop.scss'
import Button from '../common/button';
// IMPORT PROJECT REFERENCES

// COMPONENT

export const After = () => (
    <div className="after"> 
        <div className='notify'>
            <div className='horizon giveaway'>
                <div>
                    <span style={{fontFamily: 'Horizon'}}> YOU JOINED</span>
                </div>
                <div>
                    <span>0</span><span style={{fontFamily: 'Horizon'}}>GIVEAWAYS</span>
                </div>
            </div>
            <div className='earned'>
                <div className='text'>
                    With a total earned value in USD
                </div>
                <div className='horizon amount'>
                    $ 0
                </div>
            </div>
        </div>
        <div className='giveaway-list'>
            <div className='active'>
                <div className='title'>
                    Active giveaways
                </div>
                <div className='list'>

                </div>
            </div>
            <div className='previous'>
                <div className='title'>
                    your previous giveaways
                </div>
                <div className='list'>

                </div>
            </div>
        </div>
       
        <Button button_type="tk_outlined" width="420px" height="72px" fontSize = "22px" onClick = {() => {}}>Check it out</Button>      
    </div>
);