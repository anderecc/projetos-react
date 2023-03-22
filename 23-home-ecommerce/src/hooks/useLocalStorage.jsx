export let setLocalStorage = (qtdy, product) => {
    let cart = JSON.parse(window.localStorage.getItem('cart-home'));
    // eslint-disable-next-line no-unused-expressions
    cart === null ? (cart = []) : cart;
};

export let getLocalStorage = (setCart) => {
    let cart = JSON.parse(window.localStorage.getItem('cart-home'));
    // eslint-disable-next-line no-unused-expressions
    cart === null ? (cart = []) : cart;
    return setCart(cart);
};

// export let editQtdy = (value, cart, index) => {
//     let cartEdited = [...cart];
//     if (value > cart[index].stock) {
//         value = cart[index].stock;
//     } else if (value < 0) {
//         value = 0;
//     }
//     cartEdited[index].qtdy = value;

//     return window.localStorage.setItem(
//         'cart-home',
//         JSON.stringify([...cartEdited])
//     );
// };
