import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import styles from '../styles/header.module.sass';

let Header = ({ home, about, products }) => {
    return (
        <header className={styles.container}>
            <nav className={styles.nav_content}>
                <p className={styles.logo}>
                    Coooder
                    <span> shop</span>
                </p>
                <ul className={styles.links_content}>
                    <li className={home ? styles.active : ''}>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className={about ? styles.active : ''}>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li className={products ? styles.active : ''}>
                        <Link to={'/products'}>Products</Link>
                    </li>
                </ul>
                <ul className={styles.cart_login_content}>
                    <li>
                        <Link to={'/cart'}>
                            Cart <FaShoppingCart></FaShoppingCart>
                        </Link>
                    </li>
                    <li>
                        <Link to={'#'}>
                            Login <FaUserAlt></FaUserAlt>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
