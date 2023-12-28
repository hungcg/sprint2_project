import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-bootstrap";
import HomePage from "./component/HomePage";
import "../src/css/bootstrap.min.css"
import Header from "./component/Header";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Cart from "./component/Cart";
import Shop from "./component/Shop";
import Blog from "./component/Blog";
import Contact from "./component/Contact";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/blog" element={<Blog/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/shop" element={<Shop/>}></Route>
                    <Route path="/homepage" element={<HomePage/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;
