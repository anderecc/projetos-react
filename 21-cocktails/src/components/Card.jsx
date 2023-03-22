import { Link } from 'react-router-dom';
import styles from '../styles/card.module.sass';

let Card = ({ props }) => {
    return (
        <li className={styles.content}>
            <img src={props.strDrinkThumb} alt={props.strDrink} />
            <div>
                <p className={styles.name}>{props.strDrink}</p>
                <p className={styles.glass}>{props.strGlass}</p>
                <p className={styles.alc}>{props.strAlcoholic}</p>
                <Link
                    to={`/cocktail/${props.idDrink}`}
                    className={styles.btnDetails}
                >
                    Details
                </Link>
            </div>
        </li>
    );
};

export default Card;
