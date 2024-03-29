import React from 'react';
import './Restaurant.css';

function Restaurant({ rating, name, site, email, phone, street, city, state, lat, lng}) {

    
    return (
        <div className="restaurant">
            <div className="restaurant__info">
                 <div className="restaurant__top">
                    <h3>{name}</h3>
                </div>
                 <div className="restaurant__rating">
                    {Array(rating).fill().map((_,i)=> (
                        <p>⭐️</p>
                    ))}
                </div> 
                <div className="restaurant__contact">
                    <p><strong>Contact</strong></p>
                    <p><span>Site:</span> {site}</p>
                    <p><span>Email:</span> {email}</p>
                    <p><span>Phone:</span> {phone}</p>
                </div>
                <div className="restaurant__address">
                    <p><strong>Address</strong></p>
                    <p><span>Street:</span> {street}</p>
                    <p><span>City:</span> {city}</p>
                    <p><span>State:</span> {state}</p>
                    <p><span>Location:</span> {lat},{lng}</p>
                </div>
            </div>
        </div>
    )
}

export default Restaurant
