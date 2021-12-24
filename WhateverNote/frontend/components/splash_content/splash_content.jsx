import React from 'react';
import {Link} from 'react-router-dom';

export default class SplashContent extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.history.push('/auth/signup')
    }

    render(){
        return(
            <div className="splash-content">
                <div className="first">
                <div className="page-limit">
                    <div className="first-right-col">
                        <div className="texts">
                            <h1 id="second-title">Write it down</h1>
                            <h3 id="text">WhateverNote is here to help you remember all your everyday bits of information, that might fall into forgetfullness</h3>
                        </div>
                        <div id="signup-button"><Link  to='/auth/signup'>Sign up for free</Link></div>
                    </div>
                    <img src={window.splash1} alt="splash1"/>
                    <a id="reference" href="http://www.freepik.com">@</a>
                </div>
                </div>

                {/* will add more elements if I have more time later */}
                <div className='second'>
                    <div className='page-limit'>
                        <h1>How It Works</h1>
                        <ul>
                            <li>
                                <div><img src={window.logo} alt="logo"/></div>
                                <h3>SIGN UP</h3>
                                <p>Create your account in one simple step.</p>
                            </li>
                            <li>
                                <div><i className="fas fa-plus-square"></i></div>
                                <h3>ADD CONTENT</h3>
                                <p>Type your notes and save them to your notebooks.</p>
                            </li>
                            <li>
                                <div><i className="fas fa-check-square"></i></div>
                                <h3>GET THINGS DONE</h3>
                                <p>Now you can focus on getting things, instead of trying to remember what you needed to do.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}