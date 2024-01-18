import axios from "axios";
import {jwtDecode} from "jwt-decode";

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    if (user && user.accessToken) {
        return {
            "Authorization": 'Bearer ' + user.accessToken,
            "Content-Type": 'application/json'
        };
    } else {
        return {};
    }
}
export const login = async (account) => {
    try {
        let res = await axios.post("http://localhost:8080/api/auth/login", account);
        console.log(res.data)
        return res.data;
    } catch (e) {
        throw e.response;
    }
}

export const infoToken = () => {
    const jwtToken = localStorage.getItem("user")
    if(jwtToken != null) {
        const decodedToken = jwtDecode(jwtToken);
        return decodedToken;
    }else{
        return null;
    }
}
// export const changePassword = async (account) => {
//     try {
//         let res = await axios.patch("http://localhost:8080/api/changePassword", account, {headers: authHeader()});
//         return res.data;
//     } catch (e) {
//         throw e.response;
//     }
// };
//
// export const recoverPassword = async (email) => {
//     try {
//         let res = await axios.post("http://localhost:8080/api/recoverPassword", null, {
//             params: {
//                 emailRecover: email
//             },
//             headers: authHeader()
//         });
//
//         return res.data;
//     } catch (e) {
//         throw e.response;
//     }
// };
