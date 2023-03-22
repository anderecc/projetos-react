import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Cocktail from './pages/Cocktail';
import './styles/global.sass';
import AppProvider from './context';

let routers = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: 'cocktail/:drinkId', element: <Cocktail /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppProvider>
            <RouterProvider router={routers} />
        </AppProvider>
    </React.StrictMode>
);
