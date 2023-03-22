import { FaCircleNotch } from 'react-icons/fa';
import styles from '../Styles/loading.module.sass';

let Loading = () => {
    return (
        <div className={styles.container}>
            <FaCircleNotch></FaCircleNotch>
        </div>
    );
};

export default Loading;
