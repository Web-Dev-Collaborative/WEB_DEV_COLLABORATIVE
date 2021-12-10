import React from 'react';
import NavBarContainer from './bars/nav_bar_container';
import SplashContent from './splash_content/splash_content';
import Footer from './splash_content/footer';

export default function Splash(){
    return(
        <div className="splash">
            <NavBarContainer/>
            <SplashContent/>
            <Footer/>
        </div>
    )
}