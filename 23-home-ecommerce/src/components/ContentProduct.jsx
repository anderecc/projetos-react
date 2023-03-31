import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { AppContext } from '../context';
import Loading from './Loading';
import styles from '../styles/product/contentProduct.module.sass';
import cvtCurrency from '../functions/cvtCurrency';
import { FaCheck } from 'react-icons/fa';

let ContentProduct = () => {
    let { state, handleSetQtdy, handleSetCart, handleSetProduct } =
        useContext(AppContext);
    let { productId } = useParams('/product/:productId');
    let [indexHero, setIndexHero] = useState(0);
    let [colorCart, setColorCart] = useState('');

    useEffect(() => {
        handleSetProduct(productId);
        handleSetQtdy(0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let renderColors = () => {
        return state.product.colors.map((color, index) => {
            return (
                <li
                    key={index}
                    className={`${styles.color} ${
                        colorCart === color ? styles.active : ''
                    }`}
                    onClick={() => setColorCart(color)}
                    style={{
                        backgroundColor:
                            color === '#ff0000'
                                ? '#F58A83'
                                : color === '#00ff00'
                                ? '#9FEE85'
                                : color === '#0000ff'
                                ? '#A09BFB'
                                : color === '#000'
                                ? '#7F7F7F'
                                : color === '#ffb900'
                                ? '#FFD889'
                                : '',
                    }}
                >
                    <FaCheck></FaCheck>
                </li>
            );
        });
    };

    let renderImages = () => {
        return state.product.images.map((image, index) => {
            return (
                <img
                    key={index}
                    src={image.url}
                    alt={image.filename}
                    onClick={() => setIndexHero(index)}
                    className={`${indexHero === index ? styles.active : ''}`}
                />
            );
        });
    };

    let renderProduct = () => {
        return (
            <section className={styles.container}>
                <article className={styles.images_container}>
                    <img
                        className={styles.image_hero}
                        src={state.product.images[indexHero].url}
                        alt={state.product.filename}
                    ></img>

                    <div>{renderImages()}</div>
                </article>
                <article className={styles.at_infos}>
                    <h3 className={styles.name}>
                        {state.product.name[0].toUpperCase() +
                            state.product.name.slice(1)}
                    </h3>
                    <div className={styles.reviews_container}>
                        <StarRatings
                            rating={state.product.stars}
                            starRatedColor="#FDBA34"
                            numberOfStars={5}
                            starDimension="20px"
                            starSpacing="1px"
                            name="rating"
                        />
                        <span>
                            ( {state.product.reviews} ) customer reviews
                        </span>
                    </div>
                    <p className={styles.price}>
                        $ {cvtCurrency(state.product.price)}
                    </p>
                    <p className={styles.description}>
                        {state.product.description}
                    </p>
                    <p className={styles.available}>
                        Available: <span>{state.product.stock}</span>
                    </p>
                    <p className={styles.brand}>
                        Brand:
                        <span>
                            {state.product.company[0].toUpperCase() +
                                state.product.company.slice(1)}
                        </span>
                    </p>
                    <div className={styles.colors_container}>
                        <p className={styles.colors}>Colors: </p>
                        <ul className={styles.colors_content}>
                            {renderColors(state.product)}
                        </ul>
                    </div>
                    <div className={styles.qtdy_container}>
                        <button
                            onClick={() =>
                                handleSetQtdy(
                                    state.qtdy - 1,
                                    state.product.stock
                                )
                            }
                        >
                            -
                        </button>
                        <span>{state.qtdy}</span>
                        <button
                            onClick={() =>
                                handleSetQtdy(
                                    state.qtdy + 1,
                                    state.product.stock
                                )
                            }
                        >
                            +
                        </button>
                    </div>
                    <Link
                        to={
                            state.product.stock === 0
                                ? '#'
                                : colorCart === ''
                                ? '#'
                                : '/cart'
                        }
                        className={styles.button_add_cart}
                        onClick={() =>
                            state.product.stock === 0
                                ? null
                                : colorCart === ''
                                ? null
                                : handleSetCart(state.product, colorCart)
                        }
                    >
                        Add to Cart
                    </Link>
                </article>
            </section>
        );
    };

    return (
        <>
            {state.product.id && state.product.id === productId ? (
                renderProduct()
            ) : (
                <Loading></Loading>
            )}
        </>
    );
};

export default ContentProduct;
