import * as cartService from '../../service/CartService';
import {infoToken} from "../../service/AuthService";

const getCartFromAPI = () => async (dispatch) => {
    try {
        const flag = infoToken() != null;
        if (flag) {
            const data = await cartService.getCartDetailsByUserId(1);
            dispatch({
                type: GET_CART_FROM_API,
                payload: data,
            });
            console.log(data)
        } else {
            dispatch({
                type: GET_CART_FROM_API,
                payload: [],
            })
        }
    } catch (err) {

    }
}

const addToCart = (userId, productId, quantity) => async (dispatch) => {
    try {
        await cartService.addNewProductToCart(userId,
            productId, quantity);
        dispatch({
            type: ADD_ITEMS,
            payload: userId, productId, quantity,
        })
    } catch (err) {

    }
};

const minusFromCart = (userId, productId, quantity) => async (dispatch) => {
    const curCart = await cartService.getCartDetailsByUserId();
    let curQty = 0;
    curCart.map(item => {
        if (item.productId === productId) {
            curQty = item.quantity;
        }
    });

    if (curQty > 1) {
        try {
            await cartService.minusProductFromCart(userId,
                productId, quantity);
            const newCart = await cartService.getCartDetailsByUserId();
            dispatch({
                type: MINUS_ITEMS,
                payload: newCart,
            })
        } catch (err) {

        }
    } else {
        const oldCart = await cartService.getCartDetailsByUserId();
        dispatch({
            type: MINUS_ITEMS,
            payload: oldCart,
        });
    }
};

const removeProducts = (userId, productId) => async (dispatch) => {
    try {
        await cartService.removeProductFromCart(userId, productId);
        dispatch({
            type: REMOVE_ITEMS,
        })
    } catch (err) {

    }
};

const payCarts = () => {
    return ({
        type: PAY_CART,
    })
}

const GET_CART_FROM_API = "GET_CART_FROM_API";
const ADD_ITEMS = "ADD_ITEMS";
const MINUS_ITEMS = "MINUS_ITEMS";
const REMOVE_ITEMS = "REMOVE_ITEMS";
const REMOVE_CART = "REMOVE_CART";
const PAY_CART = "PAY_CART";

export {getCartFromAPI, addToCart, removeProducts, minusFromCart, payCarts}

export {GET_CART_FROM_API, ADD_ITEMS, MINUS_ITEMS, REMOVE_ITEMS, REMOVE_CART, PAY_CART}