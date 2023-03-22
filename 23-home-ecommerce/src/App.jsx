import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CardSimple from './components/CardSimple';
import Header from './components/Header';
import { AppContext } from './context';
import styles from './styles/app.module.sass';
import { GiBookmarklet, GiCompass, GiDiamondTrophy } from 'react-icons/gi';
import Footer from './components/Footer';

function App() {
    let { state } = useContext(AppContext);

    return (
        <>
            <Header home></Header>
            <main className={styles.container}>
                <section className={styles.sc_intro}>
                    <article className={styles.at_intro}>
                        <h3>Design Your Comfort Zone</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Totam laboriosam fugiat animi dicta saepe
                            voluptate neque enim quae eveniet vel. Provident,
                            labore itaque optio cumque consectetur voluptates
                            placeat delectus sed!
                        </p>
                        <Link to={'/products'} className={styles.button}>
                            Shop Now
                        </Link>
                    </article>
                    <article className={styles.at_images}>
                        <img
                            className={styles.hero}
                            src="./images/hero-bcg.jpeg"
                            alt="hero-bcg"
                        />
                        <img
                            className={styles.hero_2}
                            src="./images/hero-bcg-2.jpeg"
                            alt="hero-bcg-2"
                        />
                    </article>
                </section>
                <section className={styles.sc_featured}>
                    <p className={styles.title}>Featured Products</p>
                    <article className={styles.at_cards}>
                        {state.data.length > 0 ? (
                            <>
                                <CardSimple props={state.data[3]}></CardSimple>
                                <CardSimple props={state.data[8]}></CardSimple>
                                <CardSimple props={state.data[18]}></CardSimple>
                            </>
                        ) : null}
                    </article>
                    <Link to={'/products'} className={styles.button}>
                        All Products
                    </Link>
                </section>
                <section className={styles.sc_inst}>
                    <p className={styles.title}>
                        Custom Furniture Built Only For You
                    </p>
                    <p className={styles.info}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsa amet, earum quas dignissimos veniam quia
                        nesciunt temporibus et nam ea deleniti ut minus iusto
                        doloribus quo numquam non, tempora facilis.
                    </p>
                    <div className={styles.at_inst_container}>
                        <article>
                            <span>
                                <GiCompass></GiCompass>
                            </span>
                            <p className={styles.at_inst_title}>Mission</p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Voluptates, ea. Perferendis
                                corrupti reiciendis nesciunt rerum velit autem
                                unde numquam nisi
                            </p>
                        </article>
                        <article>
                            <span>
                                <GiDiamondTrophy></GiDiamondTrophy>
                            </span>
                            <p className={styles.at_inst_title}>Vision</p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Voluptates, ea. Perferendis
                                corrupti reiciendis nesciunt rerum velit autem
                                unde numquam nisi
                            </p>
                        </article>
                        <article>
                            <span>
                                <GiBookmarklet></GiBookmarklet>
                            </span>
                            <p className={styles.at_inst_title}>History</p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Voluptates, ea. Perferendis
                                corrupti reiciendis nesciunt rerum velit autem
                                unde numquam nisi
                            </p>
                        </article>
                    </div>
                </section>
                <section className={styles.sc_newsletter}>
                    <p className={styles.title}>
                        Join our newsletter and get 20% off
                    </p>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat sint unde quaerat ratione soluta
                            veniam provident adipisci cumque eveniet tempore?
                        </p>
                        <form>
                            <input
                                type="email"
                                placeholder="Enter your e-mail"
                            />
                            <button
                                onClick={(e) => e.preventDefault()}
                                className={styles.button}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
