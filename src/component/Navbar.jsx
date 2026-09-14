import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
function Navbar(){
    return (
        <nav>
            <div>
                <img src={logo} alt="logo-image" className="h-40 w-70"  />
                <div>
                    <Link to=""></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;