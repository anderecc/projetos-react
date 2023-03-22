import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReviewProvider from './context/AppContext';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ReviewProvider>
            <App />
        </ReviewProvider>
    </React.StrictMode>
);
