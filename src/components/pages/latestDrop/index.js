/* eslint-disable react/prop-types */
// IMPORT PACKAGE REFERENCES

import React, {useEffect, useState} from 'react';
import {getConnectAddress } from '../../../services/Web3Service';
import {Link } from 'react-router-dom'
// import '../../../styles/components/latest_drop.scss'

import CopAvatar from '../../../../public/images/cop_avatar.png';
import BinanceIcon from '../../../../public/images/binance-coin-bnb-logo 1.png';
import Button from '../../common/button';
import NumberInput from '../../common/numberInput';
import Swal from 'sweetalert2';

import Ticket from '../../common/ticket';
import Pagination from '../../common/pagination/index';
import ticketData from './data.json';

// COMPONENT
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

const Copped = (props) => (
    
    <div className={props.clname + " copped"}>
            <span >YOU </span><span style={{fontFamily: 'Horizon'}}> COPPED #252 </span>
        
            <span>TIKKETS</span>
        
        
    </div>
);

const Chance = (props ) => (
    
    <div className={props.clname + " chance"}>
         
            <span style={{fontFamily: 'Horizon'}}>WITH A</span><span > 1% </span><span style={{fontFamily: 'Horizon'}}>CHANCE </span>
        
            <span style={{fontFamily: 'Horizon'}}>OF </span><span>WINNING</span>
        
        
    </div>
);

const Share = (props ) => (
    
    <div className={props.clname + " share"}>
         <div className='share-title'>
            <span >SHARE </span><span style={{fontFamily: 'Horizon'}}> TO WIN </span>
        
            <span style={{fontFamily: 'Horizon'}}>FREE </span><span >TICKETS</span>
        </div>
        <div className='share-button'>
            <Link to={`/after`}>
                <Button button_type="tk_outlined" width="352px" height="63px" fontSize = "22px" onClick = {() => {}}>Sure, give me free tikkets</Button>      
            </Link>
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
    const [tickets, setTickets] = useState(0);
    const [page] = useState(0);

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

    const[mainVisible,   setMainVisible ] = useState("show" );
    const[copiedVisible, setCopiedVisible ] = useState("");
    const[chanceVisible, setChanceVisible ] = useState("");
    const[sharedVisible, setSharedVisible ] = useState("");

    function handleCop() {
        if (getConnectAddress() == "" || getConnectAddress == "Connect" ){
            Toast.fire({ icon: 'error', titleText: 'Please connect to the wallet!' });
            return;
        }

        setTimeout(()=> {
            setMainVisible("hide");
            setCopiedVisible("show");

            setTimeout(()=> {
                setCopiedVisible("hide");
                setChanceVisible("show");

                setTimeout(()=> {
                    setChanceVisible("hide");
                    setSharedVisible("show");
                }, 2000 )
            }, 2000 )
        }, 10 );
    }

    const [curPage, setCurPage ]    = useState(1);
    const [total ]      = useState(2 );

    function handleClick(page ){ 
        if(page == "prev" && curPage != 1 ){
            setCurPage(curPage - 1 );
        }else if(page == "next" && curPage != total ){
            setCurPage(curPage + 1);
        }else if(page != "next" && page != "prev" ){
            setCurPage(page );
        }
    }


    return <div className="latest-drop"> 
        <div className={mainVisible +' main-board'}>
            <div className='cop-ticket'>
                <div className='ticket-board'>
                    <Endsin />    
                    <div className='win-bored' >
                        <span >WIN </span><span style={{color: '#3D32C3', fontFamily: 'HorizonOutlined'}}> BORED </span>
                        <span style={{color: '#3D32C3', fontFamily: 'HorizonOutlined'}}>APE </span><span>#4252</span>
                    </div>
                    <div className='mobile-img'>
                        <img src={ CopAvatar} alt ="avatar"></img>
                        <div className="sold">
                            <p>Tikkets sold:</p>
                            <p><span className='sold-num'>2000 </span> / 10,000</p>
                        </div>
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
                        <div className='price-odds'>
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
                </div>
                <div className='ticket-image'>
                    <span>
                        <img src={ CopAvatar} alt ="avatar"></img>
                    </span>
                    <div className="sold">
                        <p>Tikkets sold:</p>
                        <p><span className='sold-num'>2000</span> / 10,000</p>
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
                    <div className='mobile-field'>
                        <p className='rank'>RANK</p>
                        <p className='wallet-address'>WALLET</p>
                        <p className='tikkets'>TIKKETS</p>
                    </div>
                    <div className='tickets'>
                        {ticketData.map((data, key ) => {
                            if (key >= (curPage - 1) * 10 && key < curPage * 10){
                                return <Ticket key={data.number} number={data.number} address={data.address} up_down={data.up_down} count={data.count}></Ticket>
                            }else{
                                return  "";
                            }
                        })}
                    </div>
                    
                </div>
                <div className='page'>
                    <Pagination total={total} page={curPage} onClick={handleClick }></Pagination>
                </div>
            </div>
        </div>
                      
        <Copped clname={copiedVisible} />
        <Chance clname={chanceVisible} />
        <Share clname={sharedVisible} />
    </div>
}

export  {LatestDrop};