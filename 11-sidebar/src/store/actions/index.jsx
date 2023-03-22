export let getData = (data) => {
    return { type: 'GET_DATA', payload: data };
};

export let setMenuOpenOrClose = (value) => {
    return { type: 'SET_MENU_OPEN_OR_CLOSE', payload: value };
};

export let setModalVisible = (value) => {
    return { type: 'SET_MODAL_VISIBLE', payload: value };
};
