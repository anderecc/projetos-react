import { createContext, useEffect, useState } from 'react';

import data from '../data';

export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, setState] = useState([]);

    useEffect(() => {
        setState(data);
        console.log(state);
    }, [state]);

    return (
        <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
    );
};

export default AppProvider;
