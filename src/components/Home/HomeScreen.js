import React from 'react';
import './HomeScreen.css';
import {Link} from 'react-router-dom';

function HomeScreen() {
    return (
        <div className='main-home-screen-container'>
            <div className='main-home-screen-info-container'>
                <h2>Model 3</h2>
                <span>Order Online For <Link>Touchless Delivery</Link></span>
            </div>

            <div className='main-home-screen-btn-container'>
                <div><button className='btn1'>CUSTOM ORDER</button></div>
                <div><button className='btn2'>EXISTING INVENTORY</button></div>

            </div>
        </div>
    )
}

export default HomeScreen;
