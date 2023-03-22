import { createContext, useState } from 'react';

export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, setState] = useState();
    let [value, setValue] = useState(1);
    let [loading, setLoading] = useState(false);

    let getLorems = async () => {
        setLoading(true);
        let response = await fetch(
            `http://hipsum.co/api/?type=hipster-centric&paras=${value}`
        ).then((data) => data.json());
        setLoading(false);
        setState(response);
    };

    return (
        <AppContext.Provider
            value={{ state, value, setValue, loading, getLorems }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
