import { createContext, useEffect, useReducer } from 'react';
import { links, social } from '../data';
import { getData } from '../store/actions';
import reducer, { initialState } from '../store/reducers';

export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch(getData([links, social]));
    }, []);

    return (
        <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
    );
};

export default AppProvider;
