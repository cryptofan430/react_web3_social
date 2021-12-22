import React from 'react';

import "../../styles/components/homepage.scss";

// import Maestro from '../../images/Maestro.png';
// import Rici from '../../images/Rici_2.png';
import Tikkets from '../../images/tikkets-final_2.png';
// import Unnamed_9 from '../../images/unnamed-9.png';
// import Unnamed_10 from '../../images/unnamed-10.png';
// import Unnamed_12 from '../../images/unnamed-12.png';


const HomePage = () => (
    <div className="main">
        <div className="group-1">
            <div className="group-1-image">
                <img src={Tikkets} alt="tikkets" />
            </div>
            <div className="title">
                <p className="title-label">Did you cop a tikket yet?</p>
            </div>
            <div className="description">
                <p className="description-label">Imagine having the chance to own an iconinc NFT? <span className="description-tikkets">Tikkets</span> allows everyone to win an rare non-fungible token for a fraction of the price.</p>
            </div>
            <div className="btns">
                <button>Buy a Tikket</button>
                <button>Connect</button>
            </div>           
        </div>
    </div>
);

export { HomePage };