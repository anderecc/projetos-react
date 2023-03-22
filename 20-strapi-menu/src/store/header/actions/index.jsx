export let getState = (value) => {
    return { type: 'GET_STATE', payload: value };
};

export let setSubMenu = (value) => {
    return { type: 'SET_SUB_MENU', payload: value };
};

export let setNavWidth = (value) => {
    return { type: 'SET_NAV_WIDTH', payload: value };
};

export let setWindowSize = (value) => {
    return { type: 'SET_WINDOW_SIZE', payload: value };
};

export let setChangeMenu = () => {
    return { type: 'SET_CHANGE_MENU' };
};
