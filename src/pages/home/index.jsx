// Home.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../../components/template/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

export const Home = () => {
    return (
        <div>
            <Nav />
            <div className="container-table">
               <Outlet/>
            </div>
        </div>
    );
};