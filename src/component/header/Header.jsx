import React, { useState } from 'react';
import "./header.css";

const Header = () => {

    const[Toggel,showMenu]=useState(false);


    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav-logo'>Ravi</a>
                <div className={Toggel?"nav-menu show-menu":"nav-menu"}>
                    <ul className='nav-list grid'>
                        <li className='nav-item'>
                            <a href='#home' className='nav-link'>
                                <i className="uil uil-house-user nav-icon"></i>Home
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a href='#about' className='nav-link'>
                                <i className="uil uil-user nav-icon"></i>About
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a href='#skill' className='nav-link'>
                                <i className="uil uil-shield-check nav-icon"></i>Skill
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a href='#services' className='nav-link'>
                                <i className="uil uil-channel nav-icon"></i>Services
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a href='#qua' className='nav-link'>
                                <i className="uil uil-house-user nav-icon"></i>Qualification
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a href='#contact' className='nav-link'>
                                <i className="uil uil-message nav-icon"></i>Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav-close"  onClick={()=>showMenu(!Toggel)}></i>
                </div>

                <div className='nav-toggel' onClick={()=>showMenu(!Toggel)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;

