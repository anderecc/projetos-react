import ContentProducts from '../components/ContentProducts';
import Footer from '../components/Footer';
import FormFilter from '../components/FormFilter';
import Header from '../components/Header';
import styles from '../styles/products/products.module.sass';

function Products() {
    return (
        <>
            <Header products></Header>
            <main className={styles.container}>
                <FormFilter></FormFilter>
                <ContentProducts></ContentProducts>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Products;
