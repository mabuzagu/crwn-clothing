import React from 'react';

import './menu-item.styles.scss';


const MenuItem = ({title}) => (

    <div className="menu-item">
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOW NOW</span>
            </div>
);


export default MenuItem