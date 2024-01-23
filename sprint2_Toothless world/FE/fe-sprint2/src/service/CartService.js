import axios from 'axios';

const BASE_API = "http://localhost:8080/api/cart";

const getCartDetailsByUserId = async (userId) => {
    let userIds =JSON.parse(localStorage.getItem("user"))
    console.log(userIds.id)
    try {
        const response = await axios.get(`http://localhost:8080/api/cart/${userIds.id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cart details:', error);
    }
}


const addNewProductToCart = async (userId, productId, quantity) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/cart/${userId}/${productId}/${quantity}`);
        return res.status;
    } catch (e) {

    }
}

const minusProductFromCart = async (userId, productId, quantity) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/cart/remove/${userId}/${productId}/${quantity}`);
        return res.status;
    } catch (e) {

    }
}

const removeProductFromCart = async (userId, productId) => {
        try {
            const res = await axios.delete(BASE_API + `/${userId}/${productId}`);
            return res.status;
        } catch (e) {

        }
    }

const payCart = async (totalMoney) => {
    try {
        let userIds =JSON.parse(localStorage.getItem("user"))
        console.log(userIds.id)
        const orderPayDto = {
            userId: userIds.id,
            totalMoney: totalMoney
        }
        return await axios.post(BASE_API + `/pay`, orderPayDto);
    } catch (err) {

    }
}

;
export {getCartDetailsByUserId, addNewProductToCart, removeProductFromCart, minusProductFromCart,payCart}




