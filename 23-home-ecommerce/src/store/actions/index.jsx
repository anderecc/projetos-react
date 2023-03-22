export let setData = (value) => {
    return { type: 'SET_DATA', payload: value };
};
export let setLoading = (value) => {
    return { type: 'SET_LOADING', payload: value };
};

export let setCategory = (value) => {
    return { type: 'SET_CATEGORY', payload: value };
};
export let setCompany = (value) => {
    return { type: 'SET_COMPANY', payload: value };
};
export let setColor = (value) => {
    return { type: 'SET_COLOR', payload: value };
};
export let setPrice = (value) => {
    return { type: 'SET_PRICE', payload: value };
};
export let setShipping = (value) => {
    return { type: 'SET_SHIPPING', payload: value };
};
export let setSearch = (value) => {
    return { type: 'SET_SEARCH', payload: value };
};

export let setClearFilters = () => {
    return { type: 'SET_CLEAR_FILTERS' };
};

export let setQtdy = (value) => {
    return { type: 'SET_QTDY', payload: value };
};

export let setTypeCard = (value) => {
    return { type: 'SET_TYPE_CARD', payload: value };
};

export let getCart = (value) => {
    return { type: 'GET_CART', payload: value };
};

export let setCart = (value) => {
    localStorage.setItem('cart-home', JSON.stringify([...value]));
    return { type: 'SET_CART', payload: value };
};

export let setProduct = (value) => {
    return { type: 'SET_PRODUCT', payload: value };
};
