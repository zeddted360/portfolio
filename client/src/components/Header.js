import React, { useState } from 'react';
import './css-files/header.css';
import { NavLink } from 'react-router-dom';
import instagram from '../public/instagram.png';
import twitter from '../public/twitter.png';
import facebook from '../public/facebook.png';
import whatsapp from '../public/whatsapp.png';
import linkedin from '../public/linkdin.png';

const Header = () => {
    const [ showBar, setShowBar ] = useState(false);

   

    return ( 
<header className="header">
        <h1 className="nick-name">Zedd</h1>
        <nav className="nav-links">
            <ul className="link-list">
                <li><NavLink activeclassname="active" to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/photos">Photos</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
        <div onClick={ ()=>setShowBar( prevShowBar => (!prevShowBar)) } className="svg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
        </div>
    { showBar &&

        <div onClick={ ()=>setShowBar( prevShowBar => (!prevShowBar)) } className="bar-links">
            <div className='cross'>&times;</div>
            <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/photos">Photos</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
        
        <div className="socials">
            <a href="https://twitter.com/nwibo_azubuike">
                <img src={twitter} alt="twi"/>
            </a>
            <a href="https://www.linkedin.com/in/azubuike-joseph-nwibo-740509232">
                <img src={linkedin} style={{width:48,height:48}} alt="link" />
            </a>
            <a href="https://wa.me/qr/VVECVFO7MOTBGI">
                <img src={whatsapp} alt="wa" />
            </a>
            <a href="https:www.facebook.com/profile.php?id=100005039778558&mibextid=zbWKwl">
                <img src={facebook} alt="face" />
            </a>
            <a href="https://instagram.com/zeddted360?utm_source=qr&igshid=NGExMmI2YTkyZg%3D">
                <img src={instagram} alt="insta" />
            </a>
          </div>
        </div>
}
</header>
     );
}
 
export default Header;