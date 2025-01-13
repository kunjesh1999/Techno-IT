import React from 'react'
import { Link } from 'react-router-dom'
import { MdDarkMode } from "react-icons/md";
import logo from '../../../src/img/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='Header_main'>
            <div className="container">
                <div className="Header_main_inner">
                    <div className="logo">
                        <img src={logo} alt="" className='logo' />
                        </div>
                    <div className="hadder-menu">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/Services' >Services</Link>
                        </li>
                        <li>
                            <Link to='/Portfolio' >Portfolio</Link>
                        </li>
                        <li>
                            <Link to='/Testimonials' >Testimonials</Link>
                        </li>
                        <li>
                            <Link to='/Team' >Team</Link>
                        </li>
                        <li>
                            <Link to='/Menu' >Menu</Link>
                        </li>
                        <li>
                            <Link to='/News' >News</Link>
                        </li>
                    </ul>
                    </div>
                    
                    <div className="GetQuotes">
                        <Link to="/GetQuotes">Get Quotes</Link>
                    </div>
                    <div className="icon">
                        <MdDarkMode />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Navbar
