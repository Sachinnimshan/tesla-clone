import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import {FaTimes as ClosIcon, FaBars as MenuIcon} from 'react-icons/fa';
import {HeaderLinksData} from './HeaderLinks';

function Header({sidebar, setsidebar}) {

    const showsidebar = ()=> setsidebar(!sidebar);

    return (
        <div className='main-header-container'>
            <div className='main-header-left'>
             <Link to='/'><img className='tesla-logo' src='./Images/tesla.png'/></Link>
            </div>

            <div className='main-header-middle'>
                {HeaderLinksData.TopHeaderLinks.map((hdlink)=>(
                    <div key={hdlink.Title}>
                        <span className={hdlink.CName}><Link>{hdlink.Title}</Link></span>
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
