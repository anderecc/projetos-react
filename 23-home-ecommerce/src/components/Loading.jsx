import styles from '../styles/loading.module.sass';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

let Loading = () => {
    return (
        <div className={styles.container}>
            <span>
                <AiOutlineLoading3Quarters></AiOutlineLoading3Quarters>
            </span>
        </div>
    );
};

export default Loading;
