import React from 'react';
import MenuItem from './MenuItem';
import './Menu.css';

function Menu({Title}) {
    return (
        <div className='menu'>
            <MenuItem Title='EXISTING INVENTORY'/>
            <MenuItem Title='USED INVENTORY'/>
            <MenuItem Title='TRADE-IN'/>
            <MenuItem Title='EXISTING INVENTORY'/>
            <MenuItem Title='CYBERTRUCK'/>
            <MenuItem Title='ROADSTER'/>
            <MenuItem Title='SEMI'/>
            <MenuItem Title='CHARGING'/>
            <MenuItem Title='POWERWALL'/>
            <MenuItem Title='COMMERCIAL SOLAR'/>
            <MenuItem Title='TEST DRIVE'/>
            <MenuItem Title='CHARGING'/>
            <MenuItem Title='POWERWALL'/>
            <MenuItem Title='COMMERCIAL SOLAR'/>
            <MenuItem Title='FIND US'/>
            <MenuItem Title='SUPPORT'/>
            <MenuItem Title='SRI LANKA'/>
        </div>
    )
}

export default Menu;
