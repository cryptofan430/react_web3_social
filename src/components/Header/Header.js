// IMPORT PACKAGE REFERENCES

import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/common/button';
import {web3Init, onConnect, onDisconnect, ellipseAddress } from '../../services/Web3Service';
// COMPONENT

export const Header = () => {

    const [walletAddress, setWalletAddress] = useState("");
    web3Init();
    const walletConnect = async()=> {
        if (walletAddress == "" ){
            setWalletAddress(await onConnect());
        }else{
            setWalletAddress(await onDisconnect());
        }        
    }


    return <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/">
            <div className='logo'>TIKKETS</div>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 9L27 9" stroke="white" strokeWidth="0.5"/>
                <path d="M0 1L27 0.999998" stroke="white" strokeWidth="0.5"/>
                <path d="M0 17L27 17" stroke="white" strokeWidth="0.5"/>
            </svg>
        </button>

        <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/drop' activeClassName='menu selected' className="latest-drop" exact={true}>Latest drop</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/pre' activeClassName='menu selected' className="previous-drop">Previous drop</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                    <Button button_type="tk_outlined" onClick = {walletConnect }>{walletAddress == "" ?  "Connect" : ellipseAddress(walletAddress)}</Button>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
}