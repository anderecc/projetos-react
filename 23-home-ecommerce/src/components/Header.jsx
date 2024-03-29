import { Link } from 'react-router-dom';
import {
    FaBars,
    FaShoppingCart,
    FaTimes,
    FaUserAlt,
    FaUserSlash,
} from 'react-icons/fa';
import styles from '../styles/header.module.sass';
import { useContext, useState } from 'react';
import { AppContext } from '../context';

let Header = ({ home, about, products, checkout }) => {
    let { user, handleLogOut, state } = useContext(AppContext);
    let [menu, setMenu] = useState(false);

    return (
        <header className={styles.container}>
            <div className={styles.logo_container}>
                <p className={styles.logo}>
                    Coooder
                    <span> shop</span>
                </p>
                {menu ? (
                    <button
                        className={styles.button_menu}
                        onClick={() => setMenu(!menu)}
                    >
                        <FaTimes></FaTimes>
                    </button>
                ) : (
                    <button
                        className={styles.button_menu}
                        onClick={() => setMenu(!menu)}
                    >
                        <FaBars></FaBars>
                    </button>
                )}
            </div>
            <nav
                className={`${styles.nav_content} ${
                    menu ? styles.menu_open : ''
                }`}
            >
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
                    {user ? (
                        <li className={checkout ? styles.active : ''}>
                            <Link to={'/payment'}>Checkout</Link>
                        </li>
                    ) : null}
                </ul>
                <ul className={styles.cart_login_content}>
                    <li>
                        <Link to={'/cart'} className={styles.cart_item}>
                            Cart <FaShoppingCart></FaShoppingCart>{' '}
                            <span>{state.cart ? state.cart.length : 0}</span>
                        </Link>
                    </li>
                    {user ? (
                        <li>
                            <Link to={'/'} onClick={handleLogOut}>
                                LogOut <FaUserSlash></FaUserSlash>
                            </Link>
                        </li>
                    ) : (
                        <li>
                            <Link to={'/login'}>
                                Login <FaUserAlt></FaUserAlt>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
