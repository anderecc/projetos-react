import { createContext, useEffect, useReducer, useState } from 'react';
import { getData, setMenuOpenOrClose, setWidthWindow } from '../store/actions';
import reducer, { initialState } from '../store/reducers';

function useWindowSize() {
    let [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        let handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width;
}

export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);
    let width = useWindowSize();

    useEffect(() => {
        dispatch(getData());
        if (width < 721) {
            dispatch(setWidthWindow('mobile'));
        } else if (width > 721) {
            dispatch(setWidthWindow('desktop'));
        }
    }, [width]);

    let handleMenuOpenOrClose = (value) => {
        return dispatch(setMenuOpenOrClose(value));
    };

    return (
        <AppContext.Provider value={{ state, handleMenuOpenOrClose }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;
