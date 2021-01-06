import React from 'react';
import './header.css';

const Header  = () => {

    return(
        <div className="header">
            <h1>Logged in as:</h1>
            <div>Notifications</div>
            <div>User Profile</div>
        </div>        
    )
}

export default Header;