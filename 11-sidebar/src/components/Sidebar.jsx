import { useContext } from 'react';
import { AppContext } from '../context';
import { IoClose } from 'react-icons/io5';
import Links from './Links';
import styles from '../styles/sidebar.module.sass';
let Sidebar = () => {
    let { state, handleMenuOpenOrClose } = useContext(AppContext);

    return (
        <nav
            className={`${styles.container} ${
                state.menu ? styles.menuOpen : styles.menuClose
            }`}
        >
            <div className={styles.logo}>
                <p>Coooder</p>
                <button onClick={() => handleMenuOpenOrClose(false)}>
                    <IoClose></IoClose>
                </button>
            </div>
            <Links className={'links'} links={state.links}></Links>
            <Links className={'social'} links={state.social} target></Links>
        </nav>
    );
};

export default Sidebar;
