import React, { useState } from 'react';
import './App.css';
import './Header.css';
import logo from './logo.png';
import Home from './Home';
import SearchIcon from '@material-ui/icons/Search';


function App() {

  const [inputText, setInputText] = useState("");

         const inputHandler = (e) => {
                //convert input text to lower case
                var lowerCase = e.target.value.toLowerCase();
                setInputText(lowerCase);
            };

         const onSubmit = () => {
                
                //    this.props.searchRestaurants(this.state.text);
                //    this.setState({text: ''});
                console.log(inputText);
                }

  
  return (
    <div className="app">
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
                    <div>
                      <form className="header__search" onSubmit={e => 
                      { e.preventDefault();
                          console.log('enter')
                          onSubmit();
                      }}>
                          <input className="header__searchInput" name="text" placeholder="Search Restaurant..."  onChange={inputHandler} 
                          type="text"/> 
                          <SearchIcon className="header__searchIcon" onClick={onSubmit}  type="submit"/>
                      </form>
                </div>
            </div>
        </div>
     <Home input={inputText}/>
      </div>
  );
}

export default App;
