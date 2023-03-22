export let setSort = (value, data, dispatch, setData) => {
    if (value === 'price-lowest') {
        dispatch(setData(data.sort((a, b) => a.price - b.price)));
    } else if (value === 'price-highest') {
        dispatch(setData(data.sort((a, b) => b.price - a.price)));
    } else if (value === 'name-a-z') {
        dispatch(
            setData(
                data.sort((a, b) =>
                    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                )
            )
        );
    } else if (value === 'name-z-a') {
        dispatch(
            setData(
                data.sort((a, b) =>
                    b.name.toLowerCase().localeCompare(a.name.toLowerCase())
                )
            )
        );
    }
};
