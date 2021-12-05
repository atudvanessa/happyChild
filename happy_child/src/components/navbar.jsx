import React from 'react';
import Image from './../assets/logo.png'

function NavBar() {
    return (
        <div>
            <img src={Image}/>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Helper</a>
            <a href="#">Donor</a>
        </div>
    );
}

export default NavBar;