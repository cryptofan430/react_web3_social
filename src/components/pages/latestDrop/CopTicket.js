// IMPORT PACKAGE REFERENCES

import React, {useEffect, useState} from 'react';
import CopAvatar from '../../../images/cop_avatar.png';
import BinanceIcon from '../../../images/binance-coin-bnb-logo 1.png';
import Button from '../../common/button';
import NumberInput from '../../common/numberInput';


// COMPONENT
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
    // function timeToSec(time){
        
    //     let a = time.le && time.split(':')
    //     return (+a[0]) * 60 * 60 * 24+ (+a[1]) * 60 * 60 + (+a[2]) * 60 + (+a[3]); 
    // }

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



 function CopTicket() {
   const [tickets, setTickets] = useState(1);

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
    return <div className='cop-ticket'>
        <div className='ticket-board'>
            <Endsin />    
            <div className='win-bored' >
                <span >WIN </span><span style={{color: '#3D32C3', fontFamily: 'HorizonOutlined'}}> BORED APE </span><span>#4252</span>
            </div>
            <div className='content'>
                <p>We want everyone to have equal opportunity, 
                especially those who&apos;d normally wouldn&apos;t have a change or voice 
                in this space to own a iconic NFT</p>
            </div>
            <div className='cop-ticket-group'>
                <div className='cop-ticket-button-group'>
                    <NumberInput onIncrease={ () => {handleIncrease()} } onDecrease = { () => handleDecrease()} value={tickets}></NumberInput>
                    <Button button_type="tk_outlined" onClick = {() => {}}>Cop a ticket</Button>
                </div>
                <div className='price'>
                    <div className='name'>Price</div>
                    <div className='value'> 
                        <div>{0.0062 * tickets}</div>
                        <div className='img'><img src={BinanceIcon}></img></div>
                    </div>
                </div>
                <div className='odds'>
                    <div className='name'>Odds</div>
                    <div className='value'>{0.01 * tickets}%</div>
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
        <div className='avatar'>
            
        </div>


        
    </div>
}

export  {CopTicket};