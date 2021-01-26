import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import {FaTimes as ClosIcon, FaBars as MenuIcon} from 'react-icons/fa';
import {HeaderLinksData} from './HeaderLinks';
import Menu from './Menu';

function Header({sidebar, setsidebar}) {

    const showsidebar = ()=> setsidebar(!sidebar);
    const closesidebar = ()=> setsidebar(false);

    return (
        <div className='main-header-container'>
            <div className='main-header-left'>
             <img className='tesla-logo' src='./Images/tesla.png'/>
            </div>

            <div className='main-header-middle'>
                {HeaderLinksData.TopHeaderLinks.map((hdlink)=>(
                    <div key={hdlink.Title}>
                        <span className={hdlink.CName}>{hdlink.Title}</span>
                    </div>
                ))}
            </div>

            <div className='main-header-right'>
                <div className='main-header-right-account'>
                    <Link to='/' className={sidebar && 'link-hidden'}>SHOP</Link>
                    <Link to='/' className={sidebar && 'link-hidden'}>TESLA ACCOUNT</Link>
                </div>

            <div className='menuicon-side-bar-container'>
                <div onClick={showsidebar} className='menu-icon'>
                    {sidebar ? <ClosIcon/> : <MenuIcon/>}
                </div>
            </div>
        
            </div>
        </div>
    )
}

export default Header;
