import React from 'react';
import Header from "../components/Header";
import gamePrew from "../images/game-prew.png";

function MainPage({ items }) {
    return (
        <>
            <div className="first-page">
                <Header/>
                <div className="container">
                    <div className="first-page-about">
                        <h2 className="text-title">Some start text</h2>
                        <div className="text-description">Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                        </div>
                        <div className="buttons">
                            <a className="get-button-wrap" href="/">
                                <button className="get-button">Get Started Now</button>
                            </a>
                            <a className="get-button-wrap" href="/">
                                <button className="get-button">Watch video</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="main-h2">Integrate PLAYTHEM with your favorite eCommerce stack</h2>
                <ul className="logos">
                    <li><a href="/"><img src="./images/logos/shopify.png" alt=""/></a></li>
                    <li><a href="/"><img src="./images/logos/amazon.png" alt=""/></a></li>
                    <li><a href="/"><img src="./images/logos/castcom_yahoo.png" alt=""/></a></li>
                    <li><a href="/"><img src="./images/logos/zencart.png" alt=""/></a></li>
                    <li><a href="/"><img src="./images/logos/ebay.png" alt=""/></a></li>
                    <li><a href="/"><img src="./images/logos/prostores.png" alt=""/></a></li>
                    <li><a href="/"><img src="./images/logos/vendio.png" alt=""/></a></li>
                    <li><a href="/"><img src="./images/logos/volusion.png" alt=""/></a></li>
                </ul>
                <h2 className="main-h2">PLAYTHEM Games</h2>
                <div className="text-description text-description-wide">Duis aute irure dolor in reprehenderit in
                    voluptate
                    velit esse
                    cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident
                </div>
                <ul className="game-list">
                    {items &&
                        items.map((items, index) => {
                            return(
                            <li key={`${index}_${items}`}>
                                <img src={gamePrew} alt=""/>
                                <h3>{items.name}</h3>
                                <a className="get-button-wrap" href={items.link}>
                                    <button className="get-button">Preview game</button>
                                </a>
                            </li>
                            )})}
                </ul>
            </div>
        </>
    );
}

export default MainPage;