export let setLoading = (value) => {
    return { type: 'SET_LOADING', payload: value };
};
export let setUserInfos = (data) => {
    return { type: 'SET_USER_INFOS', payload: data };
};
export let setUsers = (value) => {
    return { type: 'SET_USERS', payload: value };
};
export let setError = (value) => {
    return { type: 'SET_ERROR', payload: value };
};
