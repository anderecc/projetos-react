export let getSingleCocktail = async (
    drinkId,
    dispacth,
    setLoading,
    setDetailsOf
) => {
    dispacth(setLoading(true));
    let data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    ).then((response) => response.json());
    dispacth(setLoading(false));
    dispacth(setDetailsOf(data.drinks));
};
