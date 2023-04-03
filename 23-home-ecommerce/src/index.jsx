import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AppProvider from './context';
import About from './pages/About';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Products from './pages/Products';
import './styles/global.sass';
import Login from './pages/Login';
import Register from './pages/Register';
import Payment from './pages/Payment';

let router = createBrowserRouter([
    { path: '/', element: <App /> },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/products',
        element: <Products></Products>,
    },
    { path: '/product/:productId', element: <Product></Product> },
    { path: '/cart', element: <Cart></Cart> },
    { path: '/login', element: <Login></Login> },
    { path: '/register', element: <Register></Register> },
    { path: '/payment', element: <Payment></Payment> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppProvider>
            <RouterProvider router={router}></RouterProvider>
        </AppProvider>
    </React.StrictMode>
);
