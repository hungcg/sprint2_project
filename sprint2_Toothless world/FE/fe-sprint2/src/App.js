import './App.css';
import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import HomePage from "./component/HomePage";
import "../src/css/bootstrap.min.css"
import Header from "./component/Header";
import Footer from "./component/Footer";
import Login from "./auth/Login";
import Cart from "./component/Cart";
import Shop from "./component/Shop";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Detail from "./component/Detail";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";
import HistoryOrder from "./component/HistoryOrder";
import OrderDetail from "./component/OrderDetail";

function App() {
    return (
        <>
            <PayPalScriptProvider options={{"client-id": "AS-R_5NhypsYvddnwapM2ROLopHZilI9pL1MfLlDZgGj8DE1qJqm23ffnEk5izZ_lh2GvG9630CnT0C4"}}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    < Route path="/" element={<HomePage/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/detail/:id" element={<Detail/>}></Route>
                    <Route path="/orderDetail/:id" element={<OrderDetail/>}></Route>
                    <Route path="/blog" element={<Blog/>}></Route>
                    <Route path="/history" element={<HistoryOrder/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/shop" element={<Shop/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
            <ToastContainer/>
        </PayPalScriptProvider>
        </>
    );
}

export default App;
