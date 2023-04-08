import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import styles from '../styles/header.module.sass';
import { logOut } from '../store/actions/userActions';

let Header = () => {
    let user = useSelector((state) => state.user);
    let dispatch = useDispatch();

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
                    {!user.loading ? (
                        <>
                            <li>
                                {!user.user_uid ? (
                                    <Link to={'/login'}>Entrar</Link>
                                ) : (
                                    <Link
                                        to={'/login'}
                                        onClick={() => dispatch(logOut())}
                                    >
                                        Sair
                                    </Link>
                                )}
                            </li>
                            {!user.user_uid ? (
                                <li>
                                    <Link to={'/register'}>Registrar-se</Link>
                                </li>
                            ) : null}
                        </>
                    ) : null}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
