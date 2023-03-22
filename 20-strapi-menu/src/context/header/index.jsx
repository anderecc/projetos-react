import { createContext, useEffect, useReducer } from 'react';
import sublinks from '../../data';
import { setProperty } from '../../functions/header';
import { useWindowSize } from '../../hooks/header';
import {
    getState,
    setChangeMenu,
    setSubMenu,
    setWindowSize,
} from '../../store/header/actions';
import reducer, { initialState } from '../../store/header/reducers';

export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);
    let width = useWindowSize();

    useEffect(() => {
        dispatch(getState(sublinks));
        if (width < 801) {
            dispatch(setWindowSize('mobile'));
        } else if (width > 800) {
            dispatch(setWindowSize('desktop'));
        }
        if (document.querySelector('.sublink')) {
            setProperty();
        }
    }, [state.subMenu, width]);

    let handleSetSubMenu = (value) => {
        return dispatch(setSubMenu(value));
    };

    let handleChangeMenu = () => {
        dispatch(setChangeMenu());
    };

    return (
        <AppContext.Provider
            value={{ state, handleSetSubMenu, handleChangeMenu }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
