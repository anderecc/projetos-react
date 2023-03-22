import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AppProvider from './context/index.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Profile from './pages/Profile.jsx';
import './styles/index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/projects',
        element: <Projects />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/profile',
        element: <Profile />,
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
