import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';
import { FaBars, FaTimes } from 'react-icons/fa';

import styles from '../styles/header.module.sass';
let Header = () => {
    let { cookies, handleSignOut, user } = useContext(AppContext);
    let [menu, setMenu] = useState(false);

    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <p className={styles.logo}>Coooder Users</p>
                <button
                    className={`${styles.btn_menu} `}
                    onClick={() => setMenu(!menu)}
                >
                    {!menu ? <FaBars></FaBars> : <FaTimes></FaTimes>}
                </button>
            </div>
            <nav
                className={`${styles.links_content} ${
                    !menu ? styles.close : styles.open
                }`}
            >
                <ul className={styles.links_page}>
                    <li>
                        <Link to={'/'}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={'/user'}>Perfil</Link>
                    </li>
                    <li>
                        <Link to={'/users'}>Usuários</Link>
                    </li>
                </ul>
                <ul className={styles.links_user}>
                    <li>
                        {!cookies.uid || !user ? (
                            <Link to={'/login'}>Entrar</Link>
                        ) : (
                            <Link to={'/login'} onClick={handleSignOut}>
                                Sair
                            </Link>
                        )}
                    </li>
                    {!cookies.uid || !user ? (
                        <li>
                            <Link to={'/register'}>Registrar-se</Link>
                        </li>
                    ) : null}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
