import React from "react";

import '../styles/home.css';
import FeatureCarousel from "../components/FeatureCarousel";

import { IoIosInformationCircle } from "react-icons/io";

function Home() {
    return (
        <div className="home-root">
            <section className="welcome-section">
                <div className="elements">
                    <h1>Header</h1>
                    <h4>Subheading</h4>
                    <button>BUY NOW</button>
                </div>
            </section>
            <main>
                <section className="featured-products">
                    <FeatureCarousel title="Suggested for you" type="suggested" />
                    <FeatureCarousel title="Best deals" type="best" />
                </section>
                <section className="brand-overview">
                    <div className="bo-wrapper">
                        <div className="bo-image">

                        </div>
                        <div className="bo-textcontent">
                            <div className="bo-tc-head">
                                <h2>Buy and Sell with Ease</h2>
                                <h4>A small description about something!</h4>
                            </div>
                            <div className="bo-tc-text">
                                <div className="brand-infoele">
                                    <IoIosInformationCircle className="bo-icons" />
                                    <p>3% Seller Fee</p>
                                </div>
                                <div className="brand-infoele">
                                    <IoIosInformationCircle className="bo-icons" />
                                    <p>Easy Deposits and Withdrawals</p>
                                </div>
                                <div className="brand-infoele">
                                    <IoIosInformationCircle className="bo-icons" />
                                    <p>Peer-To-Peer Trading</p>
                                </div>
                                <div className="brand-infoele">
                                    <IoIosInformationCircle className="bo-icons" />
                                    <p>Full Buyer and Seller Protection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;