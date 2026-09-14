import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
function Navbar(){
    return (
        <nav className="sticky top-0 z-50 shadow-md bg-white">
            <div className=" max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
                <img src={logo} alt="logo-image" className="h-40 w-70"  />
                <div className="flex items-center gap-8">
                    <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium transition">Home</Link>
                    <Link to="/now" className="text-gray-700 hover:text-blue-500 font-medium transition">Now</Link>
                    <Link to="/login" className="bg-blue-500 text-white rounded-md px-3 py-1 hover:text-blue-800 font-medium transition">Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;