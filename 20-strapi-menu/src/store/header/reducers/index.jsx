export let initialState = {
    subMenu: '',
    subLinks: [],
    navWidth: 0,
    windowSize: 'desktop',
    menu: false,
};

let reducer = (state: initialState, action) => {
    switch (action.type) {
        case 'GET_STATE':
            return { ...state, subLinks: [...action.payload] };

        case 'SET_SUB_MENU':
            return { ...state, subMenu: action.payload };

        case 'SET_NAV_WIDTH':
            return { ...state, navWidth: action.payload };

        case 'SET_WINDOW_SIZE':
            return { ...state, windowSize: action.payload };

        case 'SET_CHANGE_MENU':
            return { ...state, menu: !state.menu };

        default:
            return { ...state };
    }
};

export default reducer;
