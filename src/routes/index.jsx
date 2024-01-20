// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/index';
import { Animais } from '../pages/animais';
import { Dashboard } from '../pages/dashboard';
import { Rebanhos } from '../pages/rebanhos';
import { Propriedades } from '../pages/propriedades';
import { Eventos } from '../pages/eventos';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home/*" element={<Home />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="animais" element={<Animais />} />
                    <Route path="eventos" element={<Eventos />} />
                    <Route path="rebanhos" element={<Rebanhos />} />
                    <Route path="propriedades" element={<Propriedades />} />
                    {/* Adicione mais rotas conforme necessário */}
                </Route>
            </Routes>
        </Router>
    );
};
