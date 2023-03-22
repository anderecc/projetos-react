import { createContext, useEffect, useReducer } from 'react';
import getMovie from '../Functions/getMovie';
import getMovies from '../Functions/getMovies';
import { setLoading, setMovie, setMovies, setSearch } from '../Store/Actions';
import reducer, { initialState } from '../Store/Reducers';

export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getMovies(state.search, dispatch, setMovies, setLoading);
    }, [state.search]);

    let handleSetSearch = (e) => {
        if (e.target.value.trim() && e.target.value.length > 0) {
            return dispatch(setSearch(e.target.value.toString()));
        } else if (e.target.value.length === 0) {
            return dispatch(setSearch(''));
        }
    };

    let handleGetMovie = (movieId) => {
        return getMovie(movieId, dispatch, setMovie, setLoading);
    };

    return (
        <AppContext.Provider value={{ state, handleSetSearch, handleGetMovie }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
