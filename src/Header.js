import React from 'react';
import './Header.css';
import logo from './logo.png';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header__hero">
            <div className="header__nav">
                <div className="header__option">
                    <button className="header__optionOne">Log In</button>
                    <button className="header__optionTwo"> Sign Up</button>
                </div>
            </div>
            <div className="header__center">
                <div className="header__logo">
                    <img className="header__logoPic" src={logo}/>
                </div>
                <div className="header__search">
                    <input className="header__searchInput" type="text" /> 
                    <SearchIcon className="header__searchIcon"/>
                </div>
            </div>
        </div>
    )
}

export default Header
