export let getData = async (dispatch, setData, setLoading) => {
    let url = 'https://course-api.com/react-store-products';
    dispatch(setLoading(true));
    let data = await fetch(url).then((res) => res.json());
    dispatch(setData(data));
    dispatch(setLoading(false));
};
