import styles from '../../styles/header/item.module.sass';
import { useContext } from 'react';
import { AppContext } from '../../context/header';

let Item = ({ props }) => {
    let { handleSetSubMenu } = useContext(AppContext);

    return (
        <li
            className={`${styles.content}  ${props.page}`}
            onMouseEnter={(e) => {
                handleSetSubMenu(props.page);
            }}
        >
            {props.page[0].toUpperCase() + props.page.substring(1)}
        </li>
    );
};

export default Item;
