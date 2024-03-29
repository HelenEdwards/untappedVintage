import React from 'react';
import { Link } from 'react-router-dom';



const Hero = () => (

        
    <div className="hero">
        <nav className="login-signup">
            
            <Link to="./login" id="link">Login</Link>
            <Link to="./signup" id="link">Sign up!</Link>
        </nav>

        <div className='hero-logo'><img src="/assets/logo.png" alt="untappdVintage" /></div>
    </div>
    
);




export default Hero;
