import React from 'react';
import './Header.css';
import logo from './logo.png';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo}/>
            <div className="header__search">
                <input className="header__searchInput" type="text" /> 
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <button className="header__optionOne">Sign In</button>
                    <button className="header__optionTwo"> Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Header
