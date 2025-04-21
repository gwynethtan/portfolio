import React from "react";
import { NavLink } from "react-router-dom"; // You need to import NavLink
import { motion } from "framer-motion"; // (Optional, if you're using animations)

const NavLinkButton = ({ link, text }) => { // Use lowercase props (convention)
    return (
        <NavLink to={`/${link}`} >
            <button className="outline outline-2 outline-secondary rounded-md text-white font-semibold text-xl px-5 py-3"> 
                {text}
            </button>
        </NavLink>
    );
}

export default NavLinkButton;