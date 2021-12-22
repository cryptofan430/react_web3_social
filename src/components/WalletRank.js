// IMPORT PACKAGE REFERENCES

import React from 'react';

import Ticket from './common/ticket';

                

// COMPONENT

export const WalletRank = () => (
    <div className='wallet-rank'>
    <div className='wallet'>
        <div className='field'>
            <p className='rank'>RANK</p>
            <p className='wallet-address'>WALLET</p>
            <p className='tikkets'>TIKKETS</p>
        </div>
        <div className='tickets'>
            <Ticket number="4" address="0x10102020sd0f0w01" up_down='down' count="287"></Ticket>
            <Ticket number="5" address="0x10102020sd0f0w01" count="287"></Ticket>
            <Ticket number="6" address="0x10102020sd0f0w01" up_down='down' count="287"></Ticket>
            <Ticket number="7" address="0x10102020sd0f0w01" count="287"></Ticket>
            <Ticket number="8" address="0x10102020sd0f0w01" up_down='down' count="287"></Ticket>
            <Ticket number="9" address="0x10102020sd0f0w01" count="287"></Ticket>
        </div>
        
    </div>
    <div className='page'>

    </div>
    </div>
);