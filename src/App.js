import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Buscar from './components/Buscar';
import Posicion from './components/Posicion.js';
import Home from './components/Home';
import './index.css'
//Aca se renderizan el resto de componentes asignando cierto path para cambiar de "vistas" 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/posicion" element={<Posicion />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    
  );
};
export default App;