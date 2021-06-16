import React from 'react';

import footerLogo from '../images/footer-logo.png'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-text"><Link to="/">playthem.com</Link></div>
                    <img className="footer-logo" src={footerLogo} alt=""/>
                    <a className="get-button-wrap" href="/">
                        <button className="get-button">Get Started Now</button>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;