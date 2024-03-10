import React from "react";

import '../styles/footer.css';

function Footer() {
    return (
        <footer className="footer-root">
            <div className="payment-banner">
                <p className="pb-title">Payment Providers</p>
                <div className="provider-ele-grid">
                    <div className="provider">
                        AYDEN
                    </div>
                    <div className="provider">
                        BANK
                    </div>
                </div>
            </div>
            <div className="lower-content-wrapper">
                <div className="section1">
                    <div className="details">
                        <p className="dt-text muted">2024 © CS.Direct</p>
                        <p className="dt-text">email@email.com</p>
                    </div>
                    <div className="notice-valve">
                        <p className="dt-text muted">Not affiliated with Steam or Valve</p>
                    </div>
                </div>
                <div className="divider-v"></div>
                <div className="section2">
                    <div className="about-wrapper">
                        <p className="s2-title">About Us</p>
                        <div className="about-links al-1">
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                            <p>Support</p>
                        </div>
                        <div className="about-links al-2">
                            <p>Fees</p>
                            <p>Ethos</p>
                            <p>News</p>
                        </div>
                    </div>
                    <div className="social-media-section">
                        <p className="s2-title">Social Media</p>
                        <div className="social">
                            <div className="social-icon">

                            </div>
                            <div className="social-icon">

                            </div>
                            <div className="social-icon">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;