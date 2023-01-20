import React from "react";
import { RiHome2Fill, RiTeamFill, RiFeedbackFill, RiMoreFill } from 'react-icons/ri'
import { GiNotebook } from 'react-icons/gi'
import { MdMeetingRoom, } from 'react-icons/md'
import { BsFilePost } from 'react-icons/bs'
import { HiDocumentCheck } from 'react-icons/hi2'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { useState, useEffect } from 'react';


const Navbar = () => {
    const [activeIcon, setActiveIcon] = useState(null);

    useEffect(() => {
        const icons = document.querySelectorAll('.navbar-icons a');
        icons.forEach((icon, index) => {
            if (window.location.href.includes(icon.href)) {
                setActiveIcon(index);
            }
        });
    }, []);

    useEffect(() => {
        const icons = document.querySelectorAll('.navbar-icons a');
        icons.forEach((icon, index) => {
            if (index === activeIcon) {
                icon.classList.add('active');
            } else {
                icon.classList.remove('active');
            }
        });
    }, [activeIcon]);

    return (
        <nav className="navbar">


            <div className='navbar-icons'>
                <a href='#page1'  onClick={() => setActiveIcon(0)}><RiHome2Fill /></a>
            </div>



            <div className='navbar-icons'>
                <a href='#page2' onClick={() => setActiveIcon(1)}><RiTeamFill /></a>
            </div>

            <div className='navbar-icons'>
                <a href='#page3' onClick={() => setActiveIcon(2)}><GiNotebook /></a>
            </div>

            <div className='navbar-icons'>
                <a href='#page4' onClick={() => setActiveIcon(3)}><MdMeetingRoom /></a>
            </div>

            <div className='navbar-icons'>
                <a href='#page5' onClick={() => setActiveIcon(4)}><BsFilePost /></a>
            </div>

            <div className='navbar-icons'>
                <a href='#page6' onClick={() => setActiveIcon(5)}><HiDocumentCheck /></a>
            </div>

            <div className='navbar-icons'>
                <a href='#page7' onClick={() => setActiveIcon(6)}><AiOutlineFundProjectionScreen /></a>
            </div>

            <div className='navbar-icons'>
                <a href='#page8' onClick={() => setActiveIcon(7)}><RiFeedbackFill /></a>
            </div>

            <div className='navbar-icons'>
                <a href='#page9' onClick={() => setActiveIcon(8)}><RiMoreFill /></a>
            </div>
            
        </nav>
    );
};

export default Navbar;