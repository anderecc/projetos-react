import { createContext, useEffect, useState } from 'react';
import data from '../data/data';

export let AppContext = createContext();

let ReviewProvider = ({ children }) => {
    let [state, setState] = useState();
    let [count, setCount] = useState(0);
    useEffect(() => {
        setState(data);
    }, []);

    return (
        <AppContext.Provider value={{ state, count, setCount }}>
            {children}
        </AppContext.Provider>
    );
};

export default ReviewProvider;
