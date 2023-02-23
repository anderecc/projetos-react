import { createContext, useEffect, useState } from 'react';
import data from '../data';

export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, setState] = useState([]);
    let [type, setType] = useState('all');

    useEffect(() => {
        setState(data);
    }, [state]);

    return (
        <AppContext.Provider value={{ state, type, setType }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
