import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AppProvider from './context';
import Teste from './pages/Teste';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/teste',
        element: <Teste />,
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
