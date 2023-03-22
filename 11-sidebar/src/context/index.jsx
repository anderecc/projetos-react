import { createContext, useEffect, useReducer } from 'react';
import { links, social } from '../data';
import { getData, setModalVisible, setMenuOpenOrClose } from '../store/actions';
import reducer, { initialState } from '../store/reducers';

export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch(getData([links, social]));
    }, []);

    let handleMenuOpenOrClose = (value) => {
        return dispatch(setMenuOpenOrClose(value));
    };

    let handleModalVisible = (value) => {
        return dispatch(setModalVisible(value));
    };

    return (
        <AppContext.Provider
            value={{ state, handleMenuOpenOrClose, handleModalVisible }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
