import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({session, user, logout}){
    let Auth;
    if(Boolean(session.id)){
        Auth=(<nav className="auth-links">
            <p>Hello {user.first_name}, <button onClick={logout}>Logout</button></p>
        </nav>
        )
    }
    else{
        Auth=(<nav className="auth-links">
                <Link to="/auth/signup" >Sign Up</Link> or
                <Link to="/auth/login"> Log in</Link>
            </nav>)
    }
    
    return(
        <div className="navbar">
            <div className="page-limit">
                <div>
                    <Link to='/'><span className="page-logo">
                        <img src={window.logo} alt="WhateverNote"/>
                        <span>WhateverNote</span>
                    </span></Link>
                    <nav className="links">
                        <ul>
                            <li><a href="https://github.com/allsouza">GITHUB</a> </li>
                            <li><a href="https://www.linkedin.com/in/andre-souza-2ab6a3155/">LINKEDIN</a></li>
                        </ul>
                    </nav>
                </div>
                {Auth}
            </div>
        </div>
    )
}