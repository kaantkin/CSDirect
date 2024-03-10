import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

import '../styles/navbar.css';

function Navbar() {
    const navigate = useNavigate();

    return (
        <header className="nav-root">
            <div className="logo">

            </div>
            <div className="search-bar">
                <IoMdSearch className="icon-s" />
                <input placeholder="search" />
            </div>
            {/* No Login */}
            <div className="button-group">
                <button className="login hdr-btn" onClick={() => navigate("/login")}>LOGIN</button>
                <button className="signup hdr-btn">SIGN UP</button>
            </div>
        </header>
    );
}

export default Navbar;