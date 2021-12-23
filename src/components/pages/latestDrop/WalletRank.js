// IMPORT PACKAGE REFERENCES

import React from 'react';

import Ticket from '../../common/ticket';
import Pagination from '../../common/pagination/index';
import { ticketData } from './data';
                
// COMPONENT

export function WalletRank(){
    
    return <div className='wallet-rank'>
        <div className='wallet'>
            <div className='field'>
                <p className='rank'>RANK</p>
                <p className='wallet-address'>WALLET</p>
                <p className='tikkets'>TIKKETS</p>
            </div>
            <div className='tickets'>
                {ticketData.map( (item, key )=> {
                    <Ticket key={key} number={item.number} address={item.address} up_down={item.up_down} count={item.count}></Ticket>    
                })

                }
                <Ticket number="1" address="danieldalen.eth" up_down='up' count="248"></Ticket>
                <Ticket number="2" address="iwillwinthisapeforsure.eth" up_down='up' count="213"></Ticket>
                <Ticket number="3" address="0x8E45cbB9bAf6fREG4d0D0d3A81DF478b22091e1f" up_down='down' count="150"></Ticket>
                <Ticket number="4" address="punk3251.eth" up_down='down' count="134"></Ticket>
                <Ticket number="5" address="0x8C98cbC9bAf6cGRA1x0D0d3A81DF478b22091ce3d" count="95"></Ticket>
                <Ticket number="6" address="0x3V328bC9bAf6cGRA1x0D0d3A81DF478b22091ce2v" up_down='down' count="46"></Ticket>
                <Ticket number="7" address="0x7be8076f4ea4a4ad08075c2508e481d6c946d12b" count="23"></Ticket>
                <Ticket number="8" address="billsfan86.eth" up_down='down' count="14"></Ticket>
                <Ticket number="9" address="0x348fc118bcc65a92dc033a951af153d14d945312" count="12"></Ticket>
                <Ticket number="10" address="adam.eth" count="9"></Ticket>
            </div>
            
        </div>
        <div className='page'>
            <Pagination total={3} page={2}></Pagination>
        </div>
    </div>
}