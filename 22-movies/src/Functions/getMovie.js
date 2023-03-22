let getMovie = async (movieId, dispatch, setMovie, setLoading) => {
    dispatch(setLoading(true));
    let data = await fetch(
        `http://www.omdbapi.com/?i=${movieId}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
    ).then((res) => res.json());
    dispatch(setLoading(false));
    dispatch(setMovie(data));
};

export default getMovie;
