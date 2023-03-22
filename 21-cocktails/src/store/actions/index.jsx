export let setData = (data) => {
    return { type: 'GET_DATA', payload: data };
};

export let setSearch = (value) => {
    return { type: 'SET_SEARCH', payload: value };
};

export let setLoading = (value) => {
    return { type: 'SET_LOADING', payload: value };
};

export let setDetailsOf = (value) => {
    return { type: 'SET_DETAILS_OF', payload: value };
};
