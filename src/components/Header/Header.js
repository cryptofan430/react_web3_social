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
            <div className='latest'>
            <p>Latest drop</p>
            </div>
            <div className='previous'>
            <p>Previous drop</p>
            </div> 
        </div>

       <div className='hover-button'>
            <Button button_type="tk_outlined" onClick = {() => {}}>Connect</Button>
       </div>
   </header>
);