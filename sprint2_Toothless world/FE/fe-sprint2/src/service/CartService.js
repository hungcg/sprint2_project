import axios from 'axios';

const BASE_API = "http://localhost:8080/api/cart";

const getCartDetailsByUserId = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/cart/${userId}`);
        console.log(response.data)
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
        const res = await axios.get(BASE_API + `/remove/${userId}/${productId}/${quantity}`);
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

// const payCart = async (message) => {
//     try {
//         const username = getUsernameByJwt();
//         const orderPayDto = {
//             username: username,
//             message: message,
//         }
//         return await axios.post(BASE_API + `/pay`, orderPayDto);
//     } catch (err) {
//
//     }
// }

;
export {getCartDetailsByUserId, addNewProductToCart, removeProductFromCart, minusProductFromCart}




