import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.sass';
import App from './App';
import AppProvider from './context/header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '#',
        element: <App />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>
    </React.StrictMode>
);
