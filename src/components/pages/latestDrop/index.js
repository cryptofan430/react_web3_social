// IMPORT PACKAGE REFERENCES

import React, {useEffect, useState} from 'react';

// import '../../../styles/components/latest_drop.scss'

import CopAvatar from '../../../images/cop_avatar.png';
import BinanceIcon from '../../../images/binance-coin-bnb-logo 1.png';
import Button from '../../common/button';
import NumberInput from '../../common/numberInput';


import Ticket from '../../common/ticket';
import Pagination from '../../common/pagination/index';
import { ticketData } from './data';

// COMPONENT

const Copped = () => (
    
    <div className="horizon copped">
        <div>
            <span >YOU </span><span style={{fontFamily: 'Horizon'}}> COPPED #252</span>
        </div>
        <div>
            <span>TIKKETS</span>
        </div>
        
    </div>
);

const Chance = () => (
    
    <div className="horizon chance">
         <div>
            <span style={{fontFamily: 'Horizon'}}>WITH A</span><span > 1% </span><span style={{fontFamily: 'Horizon'}}>CHANCE</span>
        </div>
        <div>
            <span style={{fontFamily: 'Horizon'}}>OF </span><span>WINNING</span>
        </div>
        
        
        
    </div>
);

const Share = () => (
    
    <div className="horizon share">
         <div>
            <span >SHARE </span><span style={{fontFamily: 'Horizon'}}> TO WIN </span>
        </div>
        <div>
            <span style={{fontFamily: 'Horizon'}}>FREE </span><span >TICKETS</span>
        </div>
        <div className='share-button'>
            <Button button_type="tk_outlined" width="352px" height="63px" fontSize = "22px" onClick = {() => {}}>Sure, give me free tikkets</Button>      
        </div>
        
    </div>
);

function Endsin() {
    // const [seconds, setSeconds] = useState(0);
    // const dhms = '05:10:30:13';
    const [timeLeft, setTimeLeft] = useState(450000);
    

    function secondsToTime(secs){
        let days = Math.floor(secs / (60 * 60 * 24));
        let hours = Math.floor(secs / (60 * 60) - days * 24);
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "d": days,
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
    }

    useEffect(() => {
        let interval = null;    
        interval = setInterval(() => {
            setTimeLeft(timeLeft => timeLeft - 1);
        }, 1000);
        
        return () => clearInterval(interval);
    }, [timeLeft]);

      return  <div className='ends-in'>
          <span >Ends in:</span><span style={{color: '#5042FE'}} > &nbsp;&nbsp;&nbsp;{secondsToTime(timeLeft).d}d&nbsp;&nbsp; {secondsToTime(timeLeft).h}h &nbsp;&nbsp;{secondsToTime(timeLeft).m}m &nbsp;&nbsp;{secondsToTime(timeLeft).s}s</span>
      </div>
}


function LatestDrop () {
    const [tickets, setTickets] = useState(1);
    const [page, setPage] = useState(0);

   function handleIncrease () {
    setTickets(num => num + 1);
   }
   function handleDecrease () {
       if(tickets > 1)
        setTickets(num => num - 1);
       else{
        setTickets(num => num );
       }
   }
   useEffect(() => {
       
    }, [tickets, page]);

   function handleCop() {
    
    setPage(1);
    setTimeout(() => setPage(2), 1000);
    setTimeout(() => setPage(3), 3000);
   }

 return <div className="latest-drop">
            {page == 0 ?
                <div className='main-board'>
                    <div className='cop-ticket'>
                        <div className='ticket-board'>
                            <Endsin />    
                            <div className='win-bored' >
                                <p><span >WIN </span><span style={{color: '#3D32C3', fontFamily: 'HorizonOutlined'}}> BORED</span></p>
                                <p><span style={{color: '#3D32C3', fontFamily: 'HorizonOutlined'}}>APE </span><span>#4252</span></p>
                                
                            </div>
                            <div className='content'>
                                We want everyone to have equal opportunity, 
                                especially those who&apos;d normally wouldn&apos;t have a change or voice 
                                in this space to own a iconic NFT
                            </div>
                            <div className='cop-ticket-group'>
                                <div className='cop-ticket-button-group'>
                                    <NumberInput onIncrease={ () => {handleIncrease()} } onDecrease = { () => handleDecrease()} value={tickets}></NumberInput>
                                    <Button button_type="tk_outlined" onClick = {() => {handleCop()}}>Cop a ticket</Button>
                                </div>
                                <div className='price'>
                                    <div className='name'>Price</div>
                                    <div className='value'>
                                        <div>{(0.0062 * tickets).toFixed(4)}</div>
                                        <div className='img'><img src={BinanceIcon}></img></div>
                                    </div>
                                </div>
                                <div className='odds'>
                                    <div className='name'>Odds</div>
                                    <div className='value'>{(0.01 * tickets).toFixed(2)}%</div>
                                </div>
                            </div>
                        </div>
                        <div className='ticket-image'>
                            <span>
                                <img src={ CopAvatar} alt ="avatar"></img>
                            </span>
                            <div className="sold">
                                <p>Tikkets sold:</p>
                                <p><span className='sold-num'>2000</span>/10,000</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className='wallet-rank'>
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
                </div>          
            : ""}
            

            {page == 1?
                <Copped />:''
            }
            {page == 2?
                <Chance />: ''
            }
            {page == 3?
                <Share />:''

            }

    </div>
}

export  {LatestDrop};