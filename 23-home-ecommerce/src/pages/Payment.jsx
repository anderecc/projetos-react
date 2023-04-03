import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/payment/payment.module.sass';
import { useContext, useState } from 'react';
import { AppContext } from '../context';
import Loading from '../components/Loading';
import cvtCurrency from '../functions/cvtCurrency';
import { useCreditCardValidator, images } from 'react-creditcard-validator';
import { Link, Navigate } from 'react-router-dom';

let Payment = () => {
    let { state, user, handleClearCart } = useContext(AppContext);
    let [loading, setLoading] = useState(false);
    let [success, setSuccess] = useState(false);
    const {
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        getCardImageProps,
        meta: { erroredInputs },
    } = useCreditCardValidator();

    let getSubtotal = () => {
        let subtotal = 0;
        subtotal = state.cart
            ? state.cart.map((item) => (subtotal += item.price * item.qtdy))
            : 0;
        return subtotal.length > 0 ? subtotal.reduce((ac, cr) => ac + cr) : 0;
    };

    let handleSubmit = async () => {
        await setLoading(true);
        await setTimeout(() => {
            setLoading(false);
            handleClearCart();
            setSuccess(true);
        }, 2000);
    };

    if (!user) {
        return <Navigate to={'/'} />;
    }

    return (
        <>
            <Header checkout></Header>
            {state.loading ? (
                <main className={styles.container}>
                    <Loading />
                </main>
            ) : state.cart.length > 0 ? (
                <main className={styles.container}>
                    <h3>Hello, {user ? user.email : ''}</h3>
                    <p>
                        Your total is: ${' '}
                        {state.cart ? cvtCurrency(getSubtotal() + 534) : 0}
                    </p>
                    <p>Test card number: 4242 4242 4242 4242</p>
                    <section>
                        <input {...getCardNumberProps()} />
                        <small>
                            {erroredInputs.cardNumber &&
                                erroredInputs.cardNumber}
                        </small>

                        <input {...getExpiryDateProps()} />
                        <small>
                            {erroredInputs.expiryDate &&
                                erroredInputs.expiryDate}
                        </small>

                        <input {...getCVCProps()} />
                        <small>{erroredInputs.cvc && erroredInputs.cvc}</small>

                        <svg {...getCardImageProps({ images })} />
                    </section>
                    <button className={styles.button} onClick={handleSubmit}>
                        {!loading ? 'Pay' : 'Loading...'}
                    </button>
                </main>
            ) : (
                <main className={styles.container}>
                    <section className={styles.cart_empty}>
                        {success ? (
                            <p className={styles.title}>
                                Payment completed, continue shopping
                            </p>
                        ) : (
                            <p className={styles.title}>Your cart is empty</p>
                        )}
                        <Link to={'/products'} className={styles.button}>
                            Fill It
                        </Link>
                    </section>
                </main>
            )}
            <Footer></Footer>
        </>
    );
};

export default Payment;
