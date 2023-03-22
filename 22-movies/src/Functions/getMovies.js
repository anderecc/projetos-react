let getMovies = async (search, dispatch, setMovies, setLoading) => {
    dispatch(setLoading(true));
    let data = await fetch(
        `http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
    ).then((res) => res.json());
    dispatch(setLoading(false));
    dispatch(setMovies(data));
};

export default getMovies;
