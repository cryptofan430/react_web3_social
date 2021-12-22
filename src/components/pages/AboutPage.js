// IMPORT PACKAGE REFERENCES

import React from 'react';

import '../../styles/components/latest_drop.scss'
import { CopTicket } from '../CopTicket';
import { WalletRank } from '../WalletRank';

// COMPONENT

function AboutPage () {
    
 return <main className="p-3 animated fadeIn">
        
            <CopTicket />
        
        
            <WalletRank />
        
    </main>
}

export  {AboutPage};