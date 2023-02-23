import { createContext, useEffect, useState } from 'react';

export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, setState] = useState('');
    let [loading, setLoading] = useState(false);
    let [company, setCompany] = useState('TOMMY');

    let getData = async () => {
        setLoading(true);
        let response = await fetch(
            'https://course-api.com/react-tabs-project'
        ).then((data) => data.json());
        setState(response);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <AppContext.Provider
            value={{ state, loading, setLoading, company, setCompany }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
