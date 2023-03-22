export let setMovies = (value) => {
    return { type: 'SET_MOVIES', payload: value };
};

export let setMovie = (value) => {
    return { type: 'SET_MOVIE', payload: value };
};

export let setLoading = (value) => {
    return { type: 'SET_LOADING', payload: value };
};

export let setSearch = (value) => {
    return { type: 'SET_SEARCH', payload: value };
};
