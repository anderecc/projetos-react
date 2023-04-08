import { BsRocketFill } from 'react-icons/bs';
import styles from '../styles/loading/loading.module.sass';

let Loading = () => {
    return (
        <div className={styles.container}>
            <p>
                <BsRocketFill></BsRocketFill>
            </p>
            <span>Carregando...</span>
        </div>
    );
};

export default Loading;
