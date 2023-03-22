import { links, social } from '../../data';

export let initialState = {
    links: links,
    social: social,
    menu: false,
    width: '',
};

let reducer = (state: initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state };

        case 'GET_WINDOW_WIDTH':
            return { ...state, width: action.payload };

        case 'SET_MENU_OPEN_OR_CLOSE':
            return { ...state, menu: action.payload };

        default:
            return { ...state };
    }
};

export default reducer;
