import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
import {HeaderLinksData} from './HeaderLinks';

function Menu({closesidebar}) {
    return (
        <div className='menu'>
           {HeaderLinksData.SidebarData.map((sblink)=>(
               <div className='menu-item' key={sblink.Title}>
                   <Link to={sblink.path} onClick={closesidebar} className={sblink.SBCName}>{sblink.Title}</Link></div>
           ))}
        </div>
    )
}

export default Menu;
