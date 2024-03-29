import './navbar.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Nav1 = [
    { name: 'Home', r: '/' },
    { name: 'My-Courses', r: '/courses' },
    { name: 'Leaderboard', r: '/' },
    { name: 'Chat', r: '/' },
    { name: 'Quiz', r: '/' },
    { name: 'About-Us', r: '/aboutus' },
  ];

  const Nav2 = [
    { name: 'Home', r: '/' },
    { name: 'About-Us', r: '/aboutus' },
  ];
  const [diffNav, setDiffNav] = useState(Nav1);

  const navSetter = () => {
    axios.get('/api/loginstatus').then((response) => {
      if (response.data == true) {
        setDiffNav(Nav2);
      } else {
        setDiffNav(Nav1);
      }
    });
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className={`TitleOfPlatforms ${isOpen ? 'open' : ''}`}>
        <div id="Before600px" className="TitleOfPlatform">
          <div id="name1">Ez</div>
          <div id="name2">My</div>
          <div id="name3">Learn</div>
        </div>

        <div id="After600px" className="TitleOfPlatform">
          <div id="name1">E</div>
          <div id="name2">M</div>
          <div id="name3">L</div>
        </div>
      </div>

      <button
        id="hambutton"
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>

      <div className={`Navigation ${isOpen ? 'open' : ''}`}>
        <div className={`NavigatingOptions ${isOpen ? 'open' : ''}`}>

          <NavigationItems name="Home" link="/" />
          <NavigationItems name="My-Courses" link="/courses"/>
          <NavigationItems name="Leaderboard" link="/leader"/>
          <NavigationItems name="Chat" link="/chats"/>
          <NavigationItems name="Quiz" link="/"/>
          <NavigationItems name="Meet" link="https://meet.google.com/"/>
          <NavigationItems name="About-Us" link="/aboutus"/>

        
        </div>
      </div>

      <div className={`Searchcontainer ${isOpen ? 'open' : ''}`}>
       
        <button className={`SearchBar ${isOpen ? 'open' : ''}`}>
          <p>
            <a href="/login" onClick={navSetter}>
              LOGIN
            </a>
          </p>
          <div id="loginimg"></div>
        </button>
      </div>
    </div>
  );
}

const NavigationItems = (prop) => (
  <li>
    <a href={prop.link}>{prop.name}</a>
  </li>
);
export default Navbar;
