import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <div className="page-limit">
        <nav className='footer'>
            <span className="logo">
                <img src={window.logo} alt="WhateverNote"/>
                <span>WhateverNote</span>
            </span>
            <ul className="outer-list">
                <li>
                    <h3>LANGUAGES</h3>
                    <ul>
                       <li>Ruby</li>
                       <li>JavaScript</li>
                       <li>HTML</li>
                       <li>CSS</li>
                       <li>SQL</li>
                       <li>C#</li>
                       <li>Java</li>
                    </ul>
                </li>
                <li>
                    <h3>FRAMEWORKS</h3>
                    <ul>
                        <li>Rails</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>JQuery</li>
                    </ul>
                </li>
                <li>
                    <h3>CONTACT ME</h3>
                    <ul>
                        <li><a href="https://github.com/allsouza"><i className="fab fa-github"></i> GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/andre-souza-2ab6a3155/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                        <li><a href="https://twitter.com/andrells8"><i className="fab fa-twitter-square"></i> Twitter</a></li>
                        <li><a href="mailto: andre.lls@hotmail.com"><i className="fas fa-envelope-open-text"></i> Email</a></li>
                    </ul>
                </li>
                <li>
                    <nav className="auth-links">
                        <Link to="/auth/signup" >Sign Up</Link> or
                        <Link id="login" to="/auth/login"> Log in</Link>
                    </nav>
                </li>
            </ul>
            <p>© 2020 Andre Souza</p>
        </nav>
        </div>
    )
}