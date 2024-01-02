import React from 'react';
import "../css/homepage.css"
import "../css/bootstrap.min.css"

function Footer() {
    return (
        <>
            <footer className="footer-section">
                <div className="container relative">
                    <div className="sofa-img">
                        <img
                            src="https://themewagon.github.io/furni/images/sofa.png"
                            alt="Image" className="img-fluid"/>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="subscription-form">
                                <h3 className="d-flex align-items-center"></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mb-1">
                        <div className="col-lg-4">
                            <div className="mb-4 footer-logo-wrap">
                                <a href="#" className="footer-logo">
                                    Black wood<span>.</span>
                                </a>
                            </div>
                            <ul className="list-unstyled custom-social">
                                <li>
                                    <a href="#">
                                        <span className="fa fa-brands fa-facebook-f"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-brands fa-twitter"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-brands fa-instagram"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-brands fa-linkedin"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-top copyright">
                        <div className="row pt-4">
                            <div className="col-lg-6">
                                <p className="mb-2 text-center text-lg-start">
                                    Copyright ©. All Rights Reserved. — Designed with love by{" "}
                                    <a href="https://untree.co">Hung Hlp</a>
                                </p>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end">
                                <ul className="list-unstyled d-inline-flex ms-auto">
                                    <li className="me-4">
                                        <a href="#">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;