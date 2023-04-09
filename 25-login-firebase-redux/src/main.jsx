import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from './routes';
import './styles/global.sass';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';
import AuthProvider from './context/AuthProvider';

document.title = 'Coooder Users';
document.documentElement.lang = 'pt';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={storeConfig}>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </Provider>
    </React.StrictMode>
);
