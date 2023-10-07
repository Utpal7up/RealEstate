import React, { useState } from 'react';
import './Navbar.css';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <nav className="container">
                <h1><span><BsFillHouseFill />Real</span>Estate</h1>
                <button className="btn">Sign In</button>
                <ul className={click ? 'nav-menu' : 'active'}>
                    <li><a className='anc' href='/'>Home</a></li>
                    <li><a className='anc' href='../hero/Hero'>About</a></li>
                    <li><a className='anc' href='../featured/Featured'>Search</a></li>
                    <li><a className='anc' href='../footer/Footer'>Contact Us</a></li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className="icon" />) : (<HiOutlineMenuAlt4 className='icon' />)}

                </div>
            </nav>
        </div>
    );
}

export default Navbar;
