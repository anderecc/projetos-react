import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
import { AppContext } from '../Context';
import styles from '../Styles/movie.module.sass';

let Movie = () => {
    let { state, handleGetMovie } = useContext(AppContext);
    let { movieId } = useParams('/movie/:movieId');

    useEffect(() => {
        handleGetMovie(movieId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let renderMovie = () => {
        return state.movie ? (
            <>
                <img
                    src={`${
                        state.movie.Poster !== 'N/A'
                            ? state.movie.Poster
                            : 'https://as1.ftcdn.net/v2/jpg/05/52/37/18/1000_F_552371867_LkVmqMEChRhMMHDQ2drOS8cwhAWehgVc.webp'
                    }`}
                    alt={`${state.movie.Title}`}
                />
                <div className={styles.content}>
                    <h3 className={styles.title}>{state.movie.Title}</h3>
                    <p className={styles.plot}>{state.movie.Plot}</p>
                    <p className={styles.released}>{state.movie.Released}</p>
                    <Link to={'/'} className={styles.linkHome}>
                        Back Home
                    </Link>
                </div>
            </>
        ) : null;
    };

    return (
        <main style={{ backgroundColor: '#8ab8a8', minHeight: '100vh' }}>
            {state.loading ? (
                <Loading></Loading>
            ) : (
                <div className={styles.container}>{renderMovie()}</div>
            )}
        </main>
    );
};

export default Movie;
