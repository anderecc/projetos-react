export let initialState = {
    loading: false,
    user: {},
    users: [],
    errors: {},
    redirect: false,
};

let reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_USER_INFOS':
            return { ...state, user: { ...action.payload } };
        case 'SET_USERS':
            return { ...state, users: action.payload };
        case 'SET_ERROR':
            return { ...state, errors: { ...state.errors, ...action.payload } };
        case 'SET_REDIRECT':
            return { ...state, redirect: action.payload };

        default:
            return { ...state };
    }
};

export default reducer;
