export let getData = async (url, dispacth, setData, setLoading) => {
    dispacth(setLoading(true));
    let data = await fetch(url).then((response) => response.json());
    dispacth(setLoading(false));

    return dispacth(setData(data.drinks));
};
