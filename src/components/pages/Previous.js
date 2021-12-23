// IMPORT PACKAGE REFERENCES
import React from 'react';
import '../../styles/components/latest_drop.scss'
import Button from '../common/button';
// IMPORT PROJECT REFERENCES

// COMPONENT

export const Previous = () => (
    <div className="horizon previous">
        
        <div>
            <span >404</span><span style={{fontFamily: 'Horizon'}}> THIS IS OUR</span>
        </div>
        <div>
            <span style={{fontFamily: 'Horizon'}}>FIRST DROP</span>
        </div>

        <Button button_type="tk_outlined" width="420px" height="72px" fontSize = "22px" onClick = {() => {}}>Check it out</Button>      
    </div>
);