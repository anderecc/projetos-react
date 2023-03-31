import { Link } from 'react-router-dom';
import cvtCurrency from '../functions/cvtCurrency';
import styles from '../styles/card/cardDetailed.module.sass';

let CardDetailed = ({ props }) => {
    return (
        <article className={styles.container}>
            <aside
                style={{ backgroundImage: `url(${props.image})` }}
                className={styles.image}
            />
            <div>
                <p className={styles.name}>
                    {props.name[0].toUpperCase() + props.name.slice(1)}
                </p>
                <p className={styles.price}>$ {cvtCurrency(props.price)}</p>
                <p className={styles.description}>{props.description}</p>
                <Link to={`/product/${props.id}`} className={styles.link}>
                    Details
                </Link>
            </div>
        </article>
    );
};

export default CardDetailed;
