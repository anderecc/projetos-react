export let initialState = {
    links: [],
    social: [],
    menu: false,
    modal: false,
};

let reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                links: action.payload[0],
                social: action.payload[1],
                loading: false,
            };

        case 'SET_MENU_OPEN_OR_CLOSE':
            return {
                ...state,
                menu: action.payload,
            };

        case 'SET_MODAL_VISIBLE':
            return { ...state, modal: action.payload };

        default:
            return { ...state };
    }
};

export default reducer;
