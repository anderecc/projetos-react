import { useContext, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { AppContext } from '../context';
import cvtCurrency from '../functions/cvtCurrency';
import styles from '../styles/cart.module.sass';
import Footer from '../components/Footer';

let Cart = () => {
    let {
        state,
        handleGetCart,
        handleEditQtdy,
        handleClearCart,
        handleDeletProduct,
    } = useContext(AppContext);

    useEffect(() => {
        handleGetCart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let getSubtotal = () => {
        let subtotal = 0;
        subtotal = state.cart
            ? state.cart.map((item) => (subtotal += item.price * item.qtdy))
            : 0;

        return subtotal.length > 0 ? subtotal.reduce((ac, cr) => ac + cr) : 0;
    };

    let renderItems = () => {
        return state.cart
            ? state.cart.map((item, index) => {
                  return (
                      <section key={item.id} className={styles.item_container}>
                          <article className={styles.infos_container}>
                              <Link to={`/product/${item.id}`}>
                                  <img
                                      src={item.images[0].url}
                                      alt={item.name}
                                  />
                              </Link>
                              <div>
                                  <p className={styles.name}>
                                      {item.name[0].toUpperCase() +
                                          item.name.slice(1)}
                                  </p>
                                  <p className={styles.colorSelected}>
                                      Color:
                                      <span
                                          style={{
                                              backgroundColor:
                                                  item.colorSelected ===
                                                  '#ff0000'
                                                      ? '#F58A83'
                                                      : item.colorSelected ===
                                                        '#00ff00'
                                                      ? '#9FEE85'
                                                      : item.colorSelected ===
                                                        '#0000ff'
                                                      ? '#A09BFB'
                                                      : item.colorSelected ===
                                                        '#000'
                                                      ? '#7F7F7F'
                                                      : item.colorSelected ===
                                                        '#ffb900'
                                                      ? '#FFD889'
                                                      : '',
                                          }}
                                      ></span>
                                  </p>
                              </div>
                          </article>
                          <article className={styles.price_container}>
                              <p>$ {cvtCurrency(item.price)}</p>
                          </article>
                          <article className={styles.qtdy_container}>
                              <button
                                  onClick={() =>
                                      handleEditQtdy(item.qtdy - 1, index)
                                  }
                              >
                                  -
                              </button>
                              <p>{item.qtdy}</p>
                              <button
                                  onClick={() =>
                                      handleEditQtdy(item.qtdy + 1, index)
                                  }
                              >
                                  +
                              </button>
                          </article>
                          <article className={styles.subtotal_container}>
                              <p>$ {cvtCurrency(item.price * item.qtdy)}</p>
                          </article>
                          <article className={styles.button_trash_container}>
                              <button onClick={() => handleDeletProduct(index)}>
                                  <FaTrashAlt></FaTrashAlt>
                              </button>
                          </article>
                      </section>
                  );
              })
            : null;
    };

    return (
        <>
            <Header cart></Header>
            <main className={styles.container}>
                {state.cart.length > 0 ? (
                    <section className={styles.content}>
                        <article className={styles.titles}>
                            <h3>Item</h3>
                            <h3>Price</h3>
                            <h3>Quantity</h3>
                            <h3>Subtotal</h3>
                        </article>
                        <hr />
                        {renderItems()}
                        <hr />
                        <article className={styles.buttons_container}>
                            <Link to={'/products'} className={styles.link}>
                                Continue shopping
                            </Link>
                            <button onClick={handleClearCart}>
                                Clear Cart
                            </button>
                        </article>
                        <article className={styles.checkout_container}>
                            <div>
                                <div className={styles.checkout_content}>
                                    <p>
                                        Subtotal:
                                        <span>
                                            $ {cvtCurrency(getSubtotal())}
                                        </span>
                                    </p>
                                    <p>
                                        Shipping Fee:<span>$ 5.34</span>
                                    </p>
                                    <hr />
                                    <p>
                                        Order Total:
                                        <span>
                                            $ {cvtCurrency(getSubtotal() + 534)}
                                        </span>
                                    </p>
                                </div>
                                <Link to={'#'} className={styles.button}>
                                    Proceed to checkout
                                </Link>
                            </div>
                        </article>
                    </section>
                ) : (
                    <section className={styles.cart_empty}>
                        <p>Your cart is empty</p>
                        <Link to={'/products'} className={styles.button}>
                            Fill It
                        </Link>
                    </section>
                )}
            </main>
            <Footer></Footer>
        </>
    );
};

export default Cart;
