import React from 'react'
import Apt1 from '../../asstes/apt1.jpg';
import Apt2 from '../../asstes/apt2.jpg';
import Apt3 from '../../asstes/apt3.jpg';

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1 className='h1'>Find Best Rated Properties</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className='container'>
                <img src={Apt1} alt='' />
                <img src={Apt2} alt='' />
                <img src={Apt3} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best