import React from 'react';
import './Restaurants.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';;

function Restaurants() {
    return (
        <div className="restaurants">
            <div className="restaurants__title">
                 <h3>Find the Best Restaurants in Town</h3>
            </div>
            <div className="sortBy">
               <button className="sortBy-btn">Sort:<strong>Alphabetically</strong><ArrowDropDownIcon/></button>
            </div>
        </div>
    )
}

export default Restaurants
