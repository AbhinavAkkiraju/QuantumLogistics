import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './Navbar.css';

const Menu = () => (
    <>
    <p><a href="home">Home</a></p>
    <p><a href="usenow">Use Now</a></p>
    <p><a href="ourmission">Our Mission</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links-name">
                    Quantum Logistics
                </div>
                <div className="navbar-links-container">
                    <Menu />
                </div>
            </div>
            <div className="navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="navbar-menu-container scale-up-center">
                        <div className="navbar-menu-container-links">
                            <Menu />
                            <div className="navbar-menu-container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
