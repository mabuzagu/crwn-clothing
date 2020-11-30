import React from 'react';

import MenuItem  from '../../components/menu-item/menu-item.component'



import './homepage.styles.scss'

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <MenuItem title="Gugu" />
            <div className="menu-item">
                <h1 className='title'>JACKETS</h1>
                <span className='subtitle'>SHOW NOW</span>
            </div>
            <div className="menu-item">
                <h1 className='title'>SNEAKERS</h1>
                <span className='subtitle'>SHOW NOW</span>
            </div>
            <div className="menu-item">
                <h1 className='title'>MENS</h1>
                <span className='subtitle'>SHOW NOW</span>
            </div>
            <div className="menu-item">
                <h1 className='title'>WOMANS</h1>
                <span className='subtitle'>SHOW NOW</span>
            </div>
        
 
        </div>
    </div>
)

export default HomePage;