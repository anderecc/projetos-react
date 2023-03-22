import Header from './components/header/Header';
import styles from './styles/app.module.sass';

function App() {
    return (
        <div className={styles.rootStrapi}>
            <Header></Header>
            <main className={styles.container}>
                <div className={styles.content}>
                    <h3>Payments infrastructure for the internet</h3>
                    <p>
                        Millions of companies of all sizes—from startups to
                        Fortune 500s—use Stripe’s software and APIs to accept
                        payments, send payouts, and manage their businesses
                        online.
                    </p>
                    <button>Start now</button>
                </div>
                <img src="./images/phone.svg" alt="" />
            </main>
        </div>
    );
}

export default App;
