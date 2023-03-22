import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import cvtCurrency from '../functions/cvtCurrency';
import styles from '../styles/cardSimple.module.sass';

let CardSimple = ({ props }) => {
    return (
        <article className={styles.container}>
            <div
                className={styles.image_container}
                style={{ backgroundImage: `url(${props.image})` }}
            >
                <div>
                    <Link to={`/product/${props.id}`}>
                        <FaSearch></FaSearch>
                    </Link>
                </div>
            </div>
            <div className={styles.infos}>
                <p className={styles.name}>
                    {props.name[0].toUpperCase() + props.name.slice(1)}
                </p>
                <p className={styles.price}>$ {cvtCurrency(props.price)}</p>
            </div>
        </article>
    );
};

export default CardSimple;
