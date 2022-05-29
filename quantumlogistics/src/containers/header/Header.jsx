import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div classname="header section-padding" id="home">
            <div className="header-content">
                <h1 className="gradient__text">
                    Join The Quantum Movement With Our Innovative Supply Chain Logistics Software
                </h1>
                <p>Given your preferences on budget, carbon footprint/emissions, speed of transportaion, and starting/ending location, our software will give you how much distance should be covered on each mode of travel to have the most optimal transport of cargo.</p>
                <div className="header-content-input">
                    <input type="email" placeholder="Your Email Address"></input>
                    <button type="button1">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Header
