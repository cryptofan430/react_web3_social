// IMPORT PACKAGE REFERENCES
import React from 'react';
import '../../styles/components/latest_drop.scss'
import Button from '../common/button';
// IMPORT PROJECT REFERENCES

// COMPONENT

export const Previous = () => (
    <div className="previous">
        
        <div className='previous-title'>
            <span >404</span><span style={{fontFamily: 'Horizon'}}> THIS IS OUR </span>
        
            <span style={{fontFamily: 'Horizon'}}>FIRST DROP</span>
        </div>
        <div className='check_btn'>
            <Button button_type="tk_outlined" onClick = {() => {}}>Check it out</Button>
        </div>
    </div>
);