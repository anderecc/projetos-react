let initialState = {
    user_uid: '',
    loading: false,
    user: {},
    users: [],
    errors: {},
};

let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_UID':
            return { ...state, user_uid: action.payload };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_USER_INFOS':
            return { ...state, user: { ...action.payload } };
        case 'SET_USERS':
            return { ...state, users: action.payload };
        case 'SET_ERROR':
            return { ...state, errors: { ...state.errors, ...action.payload } };

        default:
            return { ...state };
    }
};

export default userReducer;
