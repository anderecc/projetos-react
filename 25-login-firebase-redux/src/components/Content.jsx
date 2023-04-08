import styles from '../styles/content.module.sass';

let Content = (props) => {
    let classChildren = props.login
        ? styles.login
        : props.register
        ? styles.register
        : props.home
        ? styles.home
        : props.user
        ? styles.user
        : props.users
        ? styles.users
        : '';

    return (
        <main className={`${styles.container} ${classChildren}`}>
            {props.children}
        </main>
    );
};

export default Content;
