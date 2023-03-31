import { Link } from 'react-router-dom';
import ContentProduct from '../components/ContentProduct';
import Header from '../components/Header';
import styles from '../styles/product/product.module.sass';
import Footer from '../components/Footer';

let Product = () => {
    return (
        <>
            <Header></Header>
            <main className={styles.container}>
                <Link to={'/products'} className={styles.link_to_home}>
                    Back to Products
                </Link>
                <ContentProduct></ContentProduct>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Product;
