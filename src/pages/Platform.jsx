import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

function Platform() {
    return (
        <>
            <Header/>
            <div class="container">
                <h2 class="main-h2 main-h2-upper">Pop Up buildings price Straightforward, affordable pricing</h2>
                <div class="text-description text-description-wide">Duis aute irure dolor in reprehenderit in voluptate
                    velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                </div>
            </div>
            <div class="cards-wrap">
                <div class="container">
                    <div class="cards">
                        <div class="card-item">
                            <h2 class="text-title">Premium</h2>
                            <div class="price">$39/mon</div>
                            <ul class="tariff-list">
                                <li>1 site</li>
                                <li>Game selection</li>
                                <li>Smart triggers</li>
                                <li>Real-time statistics</li>
                                <li>Design customization</li>
                                <li>Set coupons</li>
                                <li>Image Upload</li>
                                <li>Frequency settings</li>
                                <li>Scheduling</li>
                                <li>Real-time statistics</li>
                                <li>Mobile responsive</li>
                            </ul>
                            <a class="get-button-wrap" href="/">
                                <button class="get-button">Get Started Now</button>
                            </a>
                        </div>
                        <div class="card-item premium-plus">
                            <h2 class="text-title">Premium Plus</h2>
                            <div class="price">$79/mon</div>
                            <ul class="tariff-list">
                                <li>3 sites</li>
                                <li>Game selection</li>
                                <li>Smart triggers</li>
                                <li>Real-time statistics</li>
                                <li>Design customization</li>
                                <li>Set coupons</li>
                                <li>Image Upload</li>
                                <li>Frequency settings</li>
                                <li>Scheduling</li>
                                <li>Real-time statistics</li>
                                <li>Mobile responsive</li>
                            </ul>
                            <a class="get-button-wrap" href="/">
                                <button class="get-button get-white-button">Get Started Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="get-start">
                <div className="container">
                    <div className="text-wrap">
                        <h2 className="main-h2">Some start text</h2>
                        <div className="text-description text-description-wide">Duis aute irure dolor in reprehenderit
                            in voluptate
                            velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                        </div>
                    </div>
                    <a className="get-button-wrap" href="/">
                        <button className="get-button get-white-button">Get Started Now</button>
                    </a>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Platform;