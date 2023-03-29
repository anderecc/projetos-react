import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import AppProvider from './context';
import { AppRoutes } from './routes';
import './styles/global.sass';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider>
            <CookiesProvider>
                <AppRoutes />
            </CookiesProvider>
        </AppProvider>
    </React.StrictMode>
);
