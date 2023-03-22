export let getSingleProduct = async (
    productId,
    dispacth,
    setProduct,
    setLoading
) => {
    let url = `https://course-api.com/react-store-single-product?id=${productId}`;
    dispacth(setLoading(true));
    let data = await fetch(url).then((res) => res.json());
    dispacth(setLoading(false));
    return dispacth(setProduct(data));
};
