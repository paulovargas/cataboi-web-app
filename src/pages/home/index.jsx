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
            <div className="login-form">
                {/* Adicione rotas específicas para os componentes */}
               <Outlet/>
            </div>
        </div>
    );
};








/* import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Nav } from '../../components/template/Nav';

export const Home = () => {
    return (
        <div>
            <Nav></Nav>
        </div>
    );
}; */