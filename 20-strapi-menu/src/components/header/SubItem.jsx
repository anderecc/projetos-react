import { Link } from 'react-router-dom';
import styles from '../../styles/header/subitem.module.sass';

let SubItem = ({ props }) => {
    let renderSubLinks = () => {
        return props.links
            ? props.links.map((link, index) => {
                  return (
                      <li key={index}>
                          <Link to={'#'}>
                              {link.icon}
                              {link.label[0].toUpperCase() +
                                  link.label.substring(1)}
                          </Link>
                      </li>
                  );
              })
            : null;
    };

    return <ul className={styles.content}>{renderSubLinks()}</ul>;
};

export default SubItem;
