import { createContext, useEffect, useReducer } from 'react';

import { getData } from '../functions/getData';
import { getSingleCocktail } from '../functions/getSingleCocktail';
import { setData, setDetailsOf, setLoading, setSearch } from '../store/actions';
import reducer, { initialState } from '../store/reducers';

export let AppContext = createContext();

let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

let AppProvider = ({ children }) => {
    let [state, dispacth] = useReducer(reducer, initialState);

    useEffect(() => {
        getData(url, dispacth, setData, setLoading);
    }, []);

    let handleFormValue = (e) => {
        if (e.target.value.trim() && e.target.value.length > 0) {
            return dispacth(
                setSearch(e.target.value.toString().toLowerCase().trim())
            );
        } else if (e.target.value.length === 0) {
            return dispacth(setSearch(''));
        }
    };

    let handleSetLoading = (value) => {
        return dispacth(setLoading(value));
    };

    let handleSetDetailsOf = (drinkId) => {
        return getSingleCocktail(drinkId, dispacth, setLoading, setDetailsOf);
    };

    return (
        <AppContext.Provider
            value={{
                state,
                handleFormValue,
                handleSetLoading,
                handleSetDetailsOf,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
