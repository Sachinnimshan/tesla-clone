import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';

function MenuItem({Title}) {
    return (
        <div className='menu-item'>
            <Link>{Title}</Link>
        </div>
    )
}

export default MenuItem;
