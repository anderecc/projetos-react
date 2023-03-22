import { Link } from 'react-router-dom';
import styles from '../styles/header.module.sass';

let Header = () => {
    return (
        <header className={styles.container}>
            <p>
                Coooder <span>Cocktails</span>
            </p>
            <nav>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'#'}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
