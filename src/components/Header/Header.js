// IMPORT PACKAGE REFERENCES

import React from 'react';
import Button from '../common/button';
// COMPONENT

export const Header = () => (
   <header>
       <div className='header-nav'>
           <div className='logo'>
            <p>TIKKETS</p>
            </div>
            <div className='nav-page'>
            <p>Latest drop</p>
            </div>
            <div className='nav-page'>
            <p>Previous drop</p>
            </div> 
        </div>

       <div className='hover-button'>
            <Button button_type="tk_full" onClick = {() => {}}>Connect</Button>
       </div>
   </header>
);