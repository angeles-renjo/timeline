/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { RiHome2Fill } from 'react-icons/ri'
import { RiTeamFill } from 'react-icons/ri'

const NavBar = () => {
    return (
        <nav className="navbar">
            <span className='navbar-icons'>
                <a href='#page1'><RiHome2Fill /></a><span className='navbar-divider'>|</span>
            </span>

            <span className='navbar-icons'>
                <a href='#page3'><RiTeamFill /></a>
            </span>
        </nav>
    );
};

export default NavBar;
