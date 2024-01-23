
import axios from "axios";

const BASE_API = "http://localhost:8080/api/orders";

const getOrderByUsername = async (page,orderCode) => {
    try {
        let userIds =JSON.parse(localStorage.getItem("user"))
        console.log(userIds.id)
        const res = await axios.get(BASE_API + `/${userIds.id}?page=${page}&orderCode=${orderCode}`)
        return res.data;
    } catch (err) {
    }
}

const getOrderDetails = async (orderId) => {
    try {
        let userIds =JSON.parse(localStorage.getItem("user"))
        let id = userIds.id
        const res = await axios.get(`http://localhost:8080/api/orders/details/${id}/${orderId}/`)
        if (res) {
            console.log("ok")
        }else console.log("ko")
        return res.data;
    } catch (err) {

    }
}

const getFirstOrderDay = async () => {
    try {
        let userIds =JSON.parse(localStorage.getItem("user"))
        console.log(userIds.id)
        const res = await axios.get(BASE_API + `/firstOrder/${userIds.id}`)
        return res.data;
    } catch (err) {

    }
}

const getLastOrderDay = async () => {
    try {
        let userIds =JSON.parse(localStorage.getItem("user"))
        console.log(userIds.id)
        const res = await axios.get(BASE_API + `/lastOrder/${userIds.id}`)
        return res.data;
    } catch (err) {

    }
}
export {getOrderByUsername, getOrderDetails, getLastOrderDay, getFirstOrderDay};