import styles from '../styles/loading.module.sass';

let Loading = () => {
    return (
        <div className={styles.container}>
            <div className={styles.firstBar}></div>
            <div
                className={styles.secondBar}
                style={{ animationDelay: '.2s' }}
            ></div>
            <div
                className={styles.thirdBar}
                style={{ animationDelay: '.4s' }}
            ></div>
        </div>
    );
};

export default Loading;
