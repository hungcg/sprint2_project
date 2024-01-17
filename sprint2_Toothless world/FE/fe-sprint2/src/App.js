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

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    < Route path="/" element={<HomePage/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/detail" element={<Detail/>}></Route>
                    <Route path="/blog" element={<Blog/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/shop" element={<Shop/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;
