import { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import { AppContext } from './context';
import styles from './styles/app.module.sass';

function App() {
    let { handleMenuOpenOrClose, handleModalVisible } = useContext(AppContext);

    return (
        <main className={styles.app}>
            <button
                className={styles.menuBars}
                onClick={() => handleMenuOpenOrClose(true)}
            >
                <FaBars></FaBars>
            </button>
            <button
                className={styles.buttonModal}
                onClick={() => handleModalVisible(true)}
            >
                Show modal
            </button>
            <Modal></Modal>
            <Sidebar></Sidebar>
        </main>
    );
}

export default App;
