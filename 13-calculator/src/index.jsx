import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/css/index.css';
import Calculadora from './Calculadora';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Calculadora />
    </React.StrictMode>
);
