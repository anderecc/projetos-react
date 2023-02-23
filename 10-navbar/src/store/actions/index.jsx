export let getData = () => {
    return { type: 'GET_DATA' };
};

export let setWidthWindow = (value) => {
    return { type: 'GET_WINDOW_WIDTH', payload: value };
};

export let setMenuOpenOrClose = (value) => {
    return { type: 'SET_MENU_OPEN_OR_CLOSE', payload: value };
};
