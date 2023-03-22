export let initialState = {
    drinks: [],
    search: '',
    loading: false,
    detailsOf: [],
};

let reducer = (state: initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                drinks: [...action.payload],
            };

        case 'SET_SEARCH':
            return {
                ...state,
                search: action.payload,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            };
        case 'SET_DETAILS_OF':
            return {
                ...state,
                detailsOf: action.payload,
            };

        default:
            return { ...state };
    }
};

export default reducer;
