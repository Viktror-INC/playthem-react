import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <img src="./images/logo.png" alt=""/>
            <div className="right_bar">
                <ul className="navigation">
                    <li><Link to = "/"><a href="/">Our Games</a></Link></li>
                    <li><Link to = "/platform">Platform</Link></li>
                    <li><a href="/">Use Cases</a></li>
                    <li><Link to = "/pricing">Pricing</Link></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Log in</a></li>
                </ul>
                <a className="get-button-wrap" href="/">
                    <button className="get-button">Get Started Now</button>
                </a>
            </div>
        </header>
    );
}

export default Header;