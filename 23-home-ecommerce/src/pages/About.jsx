import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/about/about.module.sass';

let About = () => {
    return (
        <>
            <Header about></Header>
            <main className={styles.container}>
                <img src="./images/hero-bcg.jpeg" alt="hero-bcg" />
                <section>
                    <h3>Our Story</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Fugiat accusantium sapiente tempora sed dolore
                        esse deserunt eaque excepturi, delectus error accusamus
                        vel eligendi, omnis beatae. Quisquam, dicta. Eos quod
                        quisquam esse recusandae vitae neque dolore, obcaecati
                        incidunt sequi blanditiis est exercitationem molestiae
                        delectus saepe odio eligendi modi porro eaque in libero
                        minus unde sapiente consectetur architecto. Ullam rerum,
                        nemo iste ex, eaque perspiciatis nisi, eum totam velit
                        saepe sed quos similique amet. Ex, voluptate accusamus
                        nesciunt totam vitae esse iste.
                    </p>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
};

export default About;
