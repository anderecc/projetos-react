import { createContext, useEffect, useReducer } from 'react';
import { getData } from '../functions/getData';
import { getSingleProduct } from '../functions/getSingleProduct';
import { setSort } from '../functions/setSort';
import {
    getCart,
    setCart,
    setCategory,
    setClearFilters,
    setColor,
    setCompany,
    setData,
    setLoading,
    setPrice,
    setProduct,
    setQtdy,
    setSearch,
    setShipping,
    setTypeCard,
} from '../store/actions';
import reducer, { initialState } from '../store/reducers';

export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, dispacth] = useReducer(reducer, initialState);

    useEffect(() => {
        getData(dispacth, setData, setLoading);
        document.title = 'Coooder Shop';
    }, []);

    let handleSetCategory = (value) => {
        return dispacth(setCategory(value));
    };
    let handleSetCompany = (value) => {
        return dispacth(setCompany(value));
    };
    let handleSetColor = (value) => {
        return dispacth(setColor(value));
    };

    let handleSetPrice = (value) => {
        return dispacth(setPrice(value));
    };

    let handleSetShipping = (value) => {
        return dispacth(setShipping(value));
    };

    let handleSetSearch = (value) => {
        if (value.trim() && value.length > 0) {
            return dispacth(setSearch(value));
        } else if (value.length === 0) {
            return dispacth(setSearch(''));
        }
    };

    let handleSetSort = (value) => {
        return setSort(value, state.data, dispacth, setData);
    };

    let handleSetClearFilters = () => {
        return dispacth(setClearFilters());
    };

    let handleSetLoading = (value) => {
        return dispacth(setLoading(value));
    };

    let handleSetQtdy = (value, max) => {
        if (value < 0) {
            return (value = 0);
        } else if (value > max) {
            return (value = max);
        }

        return dispacth(setQtdy(value));
    };

    let handleSetProduct = (productId) => {
        return getSingleProduct(productId, dispacth, setProduct, setLoading);
    };

    let handleSetCart = (product, color) => {
        if (state.qtdy > 0) {
            if (state.cart.some((item) => item.id === product.id)) {
                state.cart.filter((item, ind) => {
                    let newCart = [...state.cart];
                    if (item.id === product.id) {
                        newCart[ind].qtdy + state.qtdy > product.stock
                            ? (newCart[ind].qtdy = product.stock)
                            : (newCart[ind].qtdy += state.qtdy);
                        newCart[ind].subtotal = product.price * state.qtdy;
                        newCart[ind].colorSelected = color;
                    }
                    return dispacth(setCart([...newCart]));
                });
            } else {
                if (state.cart.length === 0) {
                    return dispacth(
                        setCart([
                            {
                                ...product,
                                qtdy: state.qtdy,
                                subtotal: product.price * state.qtdy,
                                colorSelected: color,
                            },
                        ])
                    );
                } else {
                    return dispacth(
                        setCart([
                            ...state.cart,
                            {
                                ...product,
                                qtdy: state.qtdy,
                                subtotal: product.price * state.qtdy,
                                colorSelected: color,
                            },
                        ])
                    );
                }
            }
        }
    };

    let handleGetCart = () => {
        let cart = JSON.parse(window.localStorage.getItem('cart-home')) ?? [];
        return dispacth(getCart(cart));
    };

    let handleEditQtdy = (newQtdy, index) => {
        let newCart = [...state.cart];
        if (newQtdy > newCart[index].stock) {
            newCart[index].qtdy = newCart[index].stock;
        } else if (newQtdy === 0) {
            newCart.splice(index, 1);
        } else {
            newCart[index].qtdy = newQtdy;
        }
        return dispacth(setCart(newCart));
    };

    let handleClearCart = () => {
        return dispacth(setCart([]));
    };

    let handleDeletProduct = (index) => {
        let newCart = [...state.cart];
        newCart.splice(index, 1);

        return dispacth(setCart([...newCart]));
    };

    let handleSetTypeCard = (value) => {
        return dispacth(setTypeCard(value));
    };

    return (
        <AppContext.Provider
            value={{
                state,
                handleSetCategory,
                handleSetCompany,
                handleSetColor,
                handleSetPrice,
                handleSetShipping,
                handleSetSearch,
                handleSetSort,
                handleSetClearFilters,
                handleSetLoading,
                handleSetQtdy,
                handleGetCart,
                handleSetCart,
                handleEditQtdy,
                handleClearCart,
                handleDeletProduct,
                handleSetTypeCard,
                handleSetProduct,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
