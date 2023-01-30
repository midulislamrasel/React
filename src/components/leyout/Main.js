import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <div>
            
            <Outlet></Outlet>
            <Navbar></Navbar>
        </div>
    );
};

export default Main;