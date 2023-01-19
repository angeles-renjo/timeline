/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { RiHome2Fill, RiTeamFill, RiFeedbackFill, RiMoreFill } from 'react-icons/ri'
import { GiNotebook } from 'react-icons/gi'
import { MdMeetingRoom,  } from 'react-icons/md'
import { BsFilePost } from 'react-icons/bs'
import { HiDocumentCheck } from 'react-icons/hi2'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'






const NavBar = () => {
    return (
        <nav className="navbar">
            <div className='navbar-icons'>
                <a href='#page1'><RiHome2Fill /></a><span className='navbar-divider'>|</span>
            </div>

            <div className='navbar-icons'>
                <a href='#page2'><GiNotebook /></a><span className='navbar-divider'>|</span>
            </div>

            <div className='navbar-icons'>
                <a href='#page3'><RiTeamFill /></a><span className='navbar-divider'>|</span>
            </div>

            <div className='navbar-icons'>
                <a href='#page4'><MdMeetingRoom /></a><span className='navbar-divider'>|</span>
            </div>

            <div className='navbar-icons'>
                <a href='#page5'><BsFilePost /></a><span className='navbar-divider'>|</span>
            </div>

            <div className='navbar-icons'>
                <a href='#page6'><HiDocumentCheck /></a><span className='navbar-divider'>|</span>
            </div>

            <div className='navbar-icons'>
                <a href='#page7'><AiOutlineFundProjectionScreen /></a><span className='navbar-divider'>|</span>
            </div>

            <div className='navbar-icons'>
                <a href='#page8'><RiFeedbackFill /></a><span className='navbar-divider'>|</span>
            </div>

            <div className='navbar-icons'>
                <a href='#page8'><RiMoreFill /></a>
            </div>
       


        </nav>
    );
};

export default NavBar;
