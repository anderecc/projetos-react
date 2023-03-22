import { useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { AppContext } from '../context';
import styles from '../styles/modal.module.sass';

let Modal = () => {
    let { state, handleModalVisible } = useContext(AppContext);
    return (
        <div
            className={`${styles.container} ${
                state.modal ? styles.container : styles.modalHidden
            }`}
        >
            <div className={styles.content}>
                <p>Modal Content</p>
                <button onClick={() => handleModalVisible(false)}>
                    <IoClose></IoClose>
                </button>
            </div>
        </div>
    );
};

export default Modal;
