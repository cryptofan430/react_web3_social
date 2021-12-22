import React from 'react';
import Button from '../../components/common/button';

import "../../styles/components/homepage.scss";

// import Maestro from '../../images/Maestro.png';
// import Rici from '../../images/Rici_2.png';
import Tikkets from '../../images/tikkets-final_2.png';
// import Unnamed_9 from '../../images/unnamed-9.png';
// import Unnamed_10 from '../../images/unnamed-10.png';
import Unnamed_12 from '../../images/unnamed-12.png';


const HomePage = () => (
    <div className="main">
        <div className="group-1">
            <div className="group-1-image">
                <img src={Tikkets} alt="tikkets" />
            </div>
            <div className="title">
                <p className="title-label">Did you <span>cop</span></p>
                <p className="title-label">a <span>tikket</span> yet?</p>
            </div>
            <div className="description">
                <p className="description-label">Imagine having the chance to own an iconinc NFT? <span className="description-tikkets">Tikkets</span> allows everyone to win an rare non-fungible token for a fraction of the price.</p>
            </div>
            <div className="btns">
                <Button button_type="tk_outlined" >But a Tikket</Button>
                <Button button_type="tk_full" >Connect</Button>                
            </div>           
        </div>
        <div className="group-2">
            <div className="group-2-component">
                <div className="title">
                    <p className="title-label">Win <span>Mutant</span></p>
                    <p className="title-label"><span>ape</span> #2535</p>
                </div>
                <div className="description">
                    <p className="description-label">Think of  <span className="description-tikkets">Tikkets</span> as a giveaway, but different. You can buy a <span className="description-tikkets">tikket</span> which gives you the chance of winning a specific NFT. Through our randomized picking process, a <span className="description-tikkets">tikket</span> will be chosen which will be awarded as the winner. Immediately after, the NFT will be transferred to the wallet of which the tikket was purchased with. Easy. </p>
                </div>
                <div className="price-tikket-button">
                    <div className="price">
                        <p className="tikket-label">Tikket price:</p>
                        <p className="tikket-price"> 0.062 Icon</p>
                    </div>
                    <div className="tikket-button">
                        <butto>Buy a Tikket</butto>
                    </div>
                </div>
            </div>
            <div className="group-2-image">
                <img src={ Unnamed_12 } alt="unnamed_12" />
                <div className="tikket-sold">
                    <p>Tikkets sold</p>
                    <p><span>2000</span>/10000</p>
                </div>
            </div>
        </div>
        <div className="group-3">
            <div className="group-3-component">
                <div className="title">
                    <p className="title-label">show off</p>
                    <p className="title-label">your <span>tikkets</span></p>
                </div>
                <div className="description">
                    <p className="description-label">Want to flex how many <span className="description-tikkets">tikkets</span> you have? Easy, each NFT giveaway has a leaderboard where you can see exactly who owns what <span className="description-tikkets">tikket</span> and how many. It’s all transparent, there for everyone to see. </p>
                </div>
            </div>
            <div className="group-3-wallets">
                <div className="wallet-details">
                    <p className="ranking">ranking</p>
                    <p className="address">wallet address</p>
                    <p className="tikkets">tikkets</p>
                </div>
            </div>
        </div>
    </div>
);

export { HomePage };