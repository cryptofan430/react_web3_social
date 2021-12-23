// IMPORT PACKAGE REFERENCES

import React from 'react';
import Button from '../common/button';
// COMPONENT

export const Header = () => (
   <header>
       <div className='header-nav'>
           <div className='logo'>TIKKETS</div>
            <div className='latest'>Latest drop</div>
            <div className='previous'>Previous drop</div> 
        </div>

       <div className='hover-button'>
            <Button button_type="tk_outlined" onClick = {() => {}}>Connect</Button>
       </div>
   </header>
);