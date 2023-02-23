export let initialState = {
    links: [],
    social: [],
    menu: true,
    loading: true,
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

        default:
            return { ...state };
    }
};

export default reducer;
