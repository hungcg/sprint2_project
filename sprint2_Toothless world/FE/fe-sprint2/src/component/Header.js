import React, { useEffect, useState } from 'react';
import "../css/homepage.css"
import "../css/bootstrap.min.css"
import { Link, NavLink, useLocation } from "react-router-dom"
import { infoToken } from "../service/AuthService";
import ModalLogout from "../auth/modal/ModalLogout";
import {useDispatch, useSelector} from "react-redux";
import {getCartFromAPI} from "../redux/actions/CartAction";

function Header() {
    const location = useLocation();
    const cartInit = useSelector((state) => state.cart.productArr);
    const dispatch = useDispatch();


    const isActive = (path) => {
        return location.pathname === path;
    }

    const [user, setUser] = useState(localStorage.getItem("user"));
    const [username, setUsername] = useState("");

    const inforUser = async () => {
        const res = infoToken();
        if (res != null) {
            setUsername(res.sub)
        }
    }

    useEffect(() => {
        dispatch(getCartFromAPI())
        inforUser()
    }, []);

    return (
        <>
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark "
                 aria-label="Furni navigation bar">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Black wood<span>.</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsFurni"
                        aria-controls="navbarsFurni"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" isActive={() => isActive("/")}>
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/shop" isActive={() => isActive("/shop")}>
                                    Cửa hàng
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to="/blog" isActive={() => isActive("/blog")}>
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to="/contact" isActive={() => isActive("/contact")}>
                                    Liên hệ
                                </NavLink>
                            </li>
                        </ul>
                        <div className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                                {!user ? (
                                    <Link className="nav-link" to="/login">
                                        <img src="https://themewagon.github.io/furni/images/user.svg" alt="Login"/>
                                    </Link>
                                ) : (
                                    <div className="nav-link text-light d-flex ">
                                            <Link className="nav-link" to="/cart">
                                                <img src="https://themewagon.github.io/furni/images/cart.svg" alt="Cart"/>
                                            </Link>
                                        <p style={{margin: "0 10px", fontWeight: "500", fontSize: "18px"}}>{username}
                                        </p>
                                        <Link role="button" data-bs-toggle="modal" data-bs-target="#logout">
                                            <i className="fa-solid fa-right-from-bracket text-light"></i>
                                        </Link>
                                        <ModalLogout/>
                                    </div>
                                )}

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
