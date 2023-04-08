import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';

let storeConfig = configureStore({
    reducer: { user: userReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default storeConfig;
