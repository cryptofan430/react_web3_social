// IMPORT PACKAGE REFERENCES

import React from 'react';

import Ticket from './common/ticket';
import Pagination from './common/pagination/index';

const ticketData = [
    {number:"1", address:"danieldalen.eth", up_down:"up", rank:"248"},
    {number:"2", address:"iwillwinthisapeforsure.eth", up_down:"down", rank:"213"},
    {number:"3", address:"0x8E45cbB9bAf6fREG4d0D0d3A81DF478b22091e1f", up_down:"up", rank:"150"}
];
                

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
                {ticketData.map( item => {
                    <Ticket number={item.number} address={item.address} up_down={item.up_down} count={item.count}></Ticket>    
                })

                }
                <Ticket number="4" address="punk3251.eth" up_down='down' count="121"></Ticket>
                <Ticket number="5" address="0x8C98cbC9bAf6cGRA1x0D0d3A81DF478b22091ce3d" count="99"></Ticket>
                <Ticket number="6" address="0x3V328bC9bAf6cGRA1x0D0d3A81DF478b22091ce2v" up_down='down' count="84"></Ticket>
                <Ticket number="7" address="0x7be8076f4ea4a4ad08075c2508e481d6c946d12b" count="62"></Ticket>
                <Ticket number="8" address="billsfan86.eth" up_down='down' count="42"></Ticket>
                <Ticket number="9" address="0x348fc118bcc65a92dc033a951af153d14d945312" count="21"></Ticket>
                <Ticket number="9" address="adam.eth" count="12"></Ticket>
            </div>
            
        </div>
        <div className='page'>
            <Pagination total={3} page={2}></Pagination>
        </div>
    </div>
);