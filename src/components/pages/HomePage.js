import React from 'react';
import Button from '../../components/common/button';
import Ticket from '../../components/common/ticket'; 
import Nft from '../../components/common/nft';

import "../../styles/components/homepage.scss";

import Maestro from '../../images/Maestro.png';
import Rici from '../../images/Rici_2.png';
import Tikkets from '../../images/tikkets-final_2.png';
import Unnamed_9 from '../../images/unnamed-9.png';
import Unnamed_10 from '../../images/unnamed-10.png';
import Unnamed_12 from '../../images/unnamed-12.png';
import Binance_logo from '../../images/binance-coin-bnb-logo 1.png';

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
                <Button button_type="tk_outlined" width="342.47px" height="72px">But a Tikket</Button>
                <Button button_type="tk_full" width="342.47px" height="72px">Connect</Button>
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
                        <p className="tikket-price">
                            <span>0.062 </span>
                            <span>
                                <img src={Binance_logo} alt="binance_logo" />
                            </span>
                        </p>
                    </div>
                    <div className="tikket-button">
                        <Button button_type="tk_outlined" width="239px" height="63px">But a Tikket</Button>
                    </div>
                </div>
            </div>
            <div className="group-2-image">
                <img src={Unnamed_12} alt="unnamed_12" />
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
                <div className="wallet-details-title">
                    <p className="ranking">ranking</p>
                    <p className="address">wallet address</p>
                    <p className="tikkets">tikkets</p>
                </div>
                <div className="wallet-details-content">
                    <Ticket number="4" address="0x10102020sd0f0w01" up_down='down' count="287"></Ticket>
                    <Ticket number="5" address="0x10102020sd0f0w01" count="287"></Ticket>
                    <Ticket number="6" address="0x10102020sd0f0w01" up_down='down' count="287"></Ticket>
                    <Ticket number="7" address="0x10102020sd0f0w01" count="287"></Ticket>
                    <Ticket number="8" address="0x10102020sd0f0w01" up_down='down' count="287"></Ticket>
                    <Ticket number="9" address="0x10102020sd0f0w01" count="287"></Ticket>
                </div>
            </div>
        </div>
        <div className="group-4">
            <div className="faq-title">
                <p>faq</p>
            </div>
            <div className="faq-details">
                <p>sdfaaaaaaaaaaaa</p>
                <p>sdfaaaaaaaaaaaa</p>
                <p>sdfaaaaaaaaaaaa</p>
                <p>sdfaaaaaaaaaaaa</p>
                <p>sdfaaaaaaaaaaaa</p>
            </div>
        </div>
        <div className="group-5">
            <div className="group-5-component">
                <div className="title">
                    <p className="title-label">who is</p>
                    <p className="title-label">behind <span>tikkets</span></p>
                </div>
                <div className="description">
                    <p className="description-label">As you know, the team behind the project is everything. Each of us behind <span className="description-tikkets">Tikkets</span> bring something unique and different to the table allowing us to execute in the best way possible.</p>
                </div>
            </div>
            <div className="nfts">              
                <Nft image={Maestro} names="daniel" /> 
                <Nft image={Unnamed_10} names="adam" />
                <Nft image={Unnamed_9} names="andre" />
                <Nft image={Rici} names="kozlov" />               
            </div>
        </div>
        <div className="group-6">
            <div className="group-6-component">
                <div className="title">
                    <p className="title-label">what tf do i </p>
                    <p className="title-label">do with my <span>tikkets</span>?</p>
                </div>
                <div className="description">
                    <p className="description-label">The unsed Tikkets will have a use-case in the near future. We’re working on this as you’re reading this and can promise you. It’s big. We’ll be annoucing this thourgh our social channels so make sure to follow us on Twitter. </p>
                </div>
            </div>
            <div className="group-6-btn">
                <Button button_type="tk_full" width="297.3px" height="72px">Follow us on Twitter</Button>
            </div>
        </div>
    </div>
);

export { HomePage };