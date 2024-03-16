

import './navbar.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`navbar ${isOpen ? 'open' : ''}`}>



            <div className={`TitleOfPlatforms ${isOpen ? 'open' : ''}`}>

                <div id='Before600px' className="TitleOfPlatform">
                    <div id="name1">EaZ</div>
                    <div id="name2">My</div>
                    <div id="name3">Learn</div>
                </div>

                <div id='After600px' className="TitleOfPlatform">
                    <div id="name1">E</div>
                    <div id="name2">M</div>
                    <div id="name3">L</div>
                </div>

            </div>



            <button id='hambutton' className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>



            <div className={`Navigation ${isOpen ? 'open' : ''}`}>
                <div className={`NavigatingOptions ${isOpen ? 'open' : ''}`}>
                    <NavigationItems name="Home" link="/"/>
                    <NavigationItems name="My-Courses"/>
                    <NavigationItems name="Leaderboard"/>
                    <NavigationItems name="Chat"/>
                    <NavigationItems name="Quiz"/>
                    <NavigationItems name="About-Us"/>
                </div>

            </div>




            <div className={`Searchcontainer ${isOpen ? 'open' : ''}`}>

                {/* <div className={`SearchBar ${isOpen ? 'open' : ''}`}>
                    <p>login</p>
                    <button id='login'></button>
                </div> */}


                <button className={`SearchBar ${isOpen ? 'open' : ''}`}>
                    <p>LOGIN</p>
                    <div id="loginimg"></div>
                </button>

            </div>


        </div>)
}


const NavigationItems = (prop) => (
    <li><a href={prop.link}>{prop.name}</a></li>
);
export default Navbar;