import React from 'react';
import "../css/homepage.css"
import "../css/bootstrap.min.css"
import {Link} from "react-router-dom"
import login from "./Login";

function Header(props) {
    return (
        <>
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark "
                 arial-label="Furni navigation bar">
                <div className="container">
                    <Link className="navbar-brand"  to="/homepage">
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
                            <li className="nav-item active">
                                <Link className="nav-link" to="/homepage" >
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link"  to="/shop">
                                    Cửa hàng
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link"  to="blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link"  to="contact">
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li>
                                <Link className="nav-link" to="/login">
                                    <img
                                        src="http://localhost:63342/furni-1.0.0/sprint2_Toothless%20world/templates/furni-1.0.0/images/user.svg"/>
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link"  to="/cart">
                                    <img
                                        src="http://localhost:63342/furni-1.0.0/sprint2_Toothless%20world/templates/furni-1.0.0/images/cart.svg"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;