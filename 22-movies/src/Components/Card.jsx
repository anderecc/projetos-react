import { Link } from 'react-router-dom';
import styles from '../Styles/card.module.sass';

let Card = ({ props }) => {
    return (
        <article
            style={{
                backgroundImage: `url('${
                    props.Poster !== 'N/A'
                        ? props.Poster
                        : 'https://as1.ftcdn.net/v2/jpg/05/52/37/18/1000_F_552371867_LkVmqMEChRhMMHDQ2drOS8cwhAWehgVc.webp'
                }')`,
            }}
            className={styles.container}
        >
            <Link to={`/movie/${props.imdbID}`} className={styles.link}>
                <div>
                    <p>{props.Title}</p>
                    <p className={styles.year}>{props.Year}</p>
                </div>
            </Link>
        </article>
    );
};

export default Card;
