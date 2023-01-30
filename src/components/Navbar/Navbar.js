import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/service'>Service</Link>
            <Link to='/skill'>Skill</Link>
        </div>
    );
};

export default Navbar;