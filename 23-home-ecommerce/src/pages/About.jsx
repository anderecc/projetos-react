import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/about.module.sass';

let About = () => {
    return (
        <>
            <Header about></Header>
            <main className={styles.container}>
                <img src="./images/hero-bcg.jpeg" alt="hero-bcg" />
                <section>
                    <h3>Our Story</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, harum. Adipisci maxime voluptate repellat
                        nihil nobis beatae neque laboriosam, eligendi quasi
                        doloremque autem temporibus saepe ipsam, quibusdam
                        velit, voluptas eaque. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Adipisci voluptatibus
                        illum sint ratione eum quidem hic, dicta asperiores in
                        sed nam reiciendis dignissimos reprehenderit commodi,
                        saepe, ducimus iusto id tenetur! Lorem, ipsum dolor sit
                        amet consectetur adipisicing elit. Tempora eveniet
                        laudantium tempore sequi placeat natus voluptas
                        similique vel ea, cum consequatur quam, illum nesciunt
                        totam dicta consectetur. Sit, mollitia voluptates.
                    </p>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
};

export default About;
