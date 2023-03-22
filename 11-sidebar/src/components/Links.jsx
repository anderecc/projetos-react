import { Link } from 'react-router-dom';
import styles from '../styles/links.module.sass';

let Links = (props) => {
    let renderLinks = (links) => {
        return links ? (
            links.map((link) => {
                return (
                    <li key={link.id} className={styles.liLink}>
                        <Link
                            to={link.url}
                            target={props.target ? '_blank' : null}
                            className={styles.link}
                        >
                            {link.icon} {link.text ? link.text : ''}
                        </Link>
                    </li>
                );
            })
        ) : (
            <></>
        );
    };

    return (
        <ul
            className={
                props.className === 'links'
                    ? styles.links
                    : props.className === 'social'
                    ? styles.social
                    : null
            }
        >
            {renderLinks(props.links)}
        </ul>
    );
};

export default Links;
