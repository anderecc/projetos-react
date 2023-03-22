import { useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/header';
import styles from '../../styles/header/header.module.sass';
import Item from './Item';
import SubItem from './SubItem';

let Header = () => {
    let { state, handleChangeMenu } = useContext(AppContext);

    let renderLinks = () => {
        return state.subLinks
            ? state.subLinks.map((link, index) => {
                  return <Item key={index} props={link}></Item>;
              })
            : null;
    };

    let renderSubLinks = (page) => {
        return state.subLinks
            ? state.subLinks.map((link, index) => {
                  return link.page === page ? (
                      <div className={styles.subLinksContent} key={index}>
                          <p>
                              {link.page[0].toUpperCase() +
                                  link.page.substring(1)}
                          </p>
                          <SubItem props={link}></SubItem>
                      </div>
                  ) : null;
              })
            : null;
    };

    let renderLinksMobile = () => {
        return state.subLinks
            ? state.subLinks.map((link, index) => {
                  return <ul key={index}>{renderSubLinks(link.page)}</ul>;
              })
            : null;
    };

    return (
        <header className={styles.container}>
            <p className={styles.logo}>Cooooder</p>
            {state.windowSize === 'desktop' ? (
                <>
                    <nav className={styles.navContainer}>
                        <ul className={styles.pages}>
                            {renderLinks()}
                            {state.subMenu === 'products' ? (
                                <li
                                    className={`${styles.subLinks} sublink`}
                                    style={{
                                        left: 'calc(17% - var(--navWidth))',
                                    }}
                                >
                                    {renderSubLinks('products')}
                                </li>
                            ) : state.subMenu === 'developers' ? (
                                <li
                                    className={`${styles.subLinks} sublink`}
                                    style={{
                                        left: 'calc(50% - var(--navWidth))',
                                    }}
                                >
                                    {renderSubLinks('developers')}
                                </li>
                            ) : state.subMenu === 'company' ? (
                                <li
                                    className={`${styles.subLinks} sublink`}
                                    style={{
                                        left: 'calc(83% - var(--navWidth)',
                                    }}
                                >
                                    {renderSubLinks('company')}
                                </li>
                            ) : null}
                        </ul>
                    </nav>
                    <Link to={'#'} className={styles.signIn}>
                        Sign in
                    </Link>
                </>
            ) : !state.menu ? (
                <>
                    <button
                        className={styles.buttonMenu}
                        onClick={handleChangeMenu}
                    >
                        <FaBars></FaBars>
                    </button>
                </>
            ) : (
                <>
                    <button
                        className={`${styles.buttonMenu}`}
                        onClick={handleChangeMenu}
                    >
                        <FaTimes></FaTimes>
                    </button>
                    <nav className={styles.navContainer}>
                        {renderLinksMobile()}
                    </nav>
                </>
            )}
        </header>
    );
};

export default Header;
