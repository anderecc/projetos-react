import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AppProvider from './Context';
import Movie from './Pages/Movie';
import './Styles/global.sass';

let router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: 'movie/:movieId', element: <Movie /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppProvider>
            <RouterProvider router={router}></RouterProvider>
        </AppProvider>
    </React.StrictMode>
);
