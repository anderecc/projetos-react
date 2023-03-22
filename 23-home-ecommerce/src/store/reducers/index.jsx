export let initialState = {
    data: [],
    loading: false,
    category: 'all',
    company: 'all',
    color: 'all',
    price: 309999,
    shipping: 'all',
    search: '',
    qtdy: 0,
    product: [],
    cart: [],
    typeCard: 'detailed',
};

let reducer = (state: initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, data: action.payload };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_CATEGORY':
            return { ...state, category: action.payload };
        case 'SET_COMPANY':
            return { ...state, company: action.payload };
        case 'SET_COLOR':
            return { ...state, color: action.payload };
        case 'SET_PRICE':
            return { ...state, price: action.payload };
        case 'SET_SHIPPING':
            return { ...state, shipping: action.payload };
        case 'SET_SEARCH':
            return { ...state, search: action.payload };
        case 'SET_CLEAR_FILTERS':
            return {
                ...state,
                category: 'all',
                company: 'all',
                color: 'all',
                price: 309999,
                shipping: 'all',
                search: '',
            };
        case 'SET_QTDY':
            return { ...state, qtdy: action.payload };
        case 'GET_CART':
            return { ...state, cart: action.payload };
        case 'SET_CART':
            return { ...state, cart: action.payload };
        case 'SET_TYPE_CARD':
            return { ...state, typeCard: action.payload };
        case 'SET_PRODUCT':
            return { ...state, product: action.payload };

        default:
            return { ...state };
    }
};

export default reducer;
