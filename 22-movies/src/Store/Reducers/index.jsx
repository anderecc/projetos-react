export let initialState = {
    search: 'fast',
    movies: [],
    movie: [],
    loading: false,
};

let reducer = (state: initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return { ...state, movies: action.payload };

        case 'SET_MOVIE':
            return { ...state, movie: action.payload };

        case 'SET_LOADING':
            return { ...state, loading: action.payload };

        case 'SET_SEARCH':
            return { ...state, search: action.payload };

        default:
            return { ...state };
    }
};

export default reducer;
