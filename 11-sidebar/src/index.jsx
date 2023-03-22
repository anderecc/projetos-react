import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AppProvider from './context';
import './styles/global.sass';

const router = createBrowserRouter([
    {
        path: '/',
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
