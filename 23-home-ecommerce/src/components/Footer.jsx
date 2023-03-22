import styles from '../styles/footer.module.sass';

let Footer = () => {
    return (
        <footer className={styles.container}>
            <span>© 2023 </span>
            <span className={styles.logo}>Coooder shop </span>
            <span>All rights reserved </span>
        </footer>
    );
};

export default Footer;
