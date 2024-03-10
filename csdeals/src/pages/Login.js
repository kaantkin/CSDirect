import React from "react";
import { useNavigate } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import '../styles/login.css';

function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-root">
            <span id="exit"><RxCross1 className="x-icon" onClick={() => navigate("/")} /></span>
            <div className="login-card">
                <div className="image">

                </div>

                <div className="input-root">
                    <div className="input-bar">
                        <FaUser className="ib-icon" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="input-bar">
                        <FaLock className="ib-icon" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <button className="proceed-btn">Log in</button>
                </div>

                <button className="forgot-pwd"><u>Forgot Password?</u></button>

                <div className="divider-h"></div>

                <div className="other-buttons">
                    <button id="steam">Sign in with Steam</button>
                    <div id="orp"><p>Or</p></div>
                    <button id="signup"><span className="hover-underline-animation">Sign up</span></button>
                </div>
            </div>
        </div>
    );
}

export default Login;