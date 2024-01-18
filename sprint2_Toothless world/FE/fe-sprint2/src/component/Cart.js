import React, { useEffect } from 'react';
import "../css/homepage.css";
import "../css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartFromAPI, minusFromCart, removeProducts } from "../redux/actions/CartAction";
import { toast } from "react-toastify";
import * as Util from "../service/Util";


function Cart() {
    const dispatch = useDispatch();
    const existingUser = JSON.parse(localStorage.getItem("user"));


    const cart = useSelector(state => state.cart.productArr);
    const totalItem = useSelector(state => state.cart.totalItem)




    const userId = existingUser.id;
    console.log(cart, userId);

    const handleRemoveFromCart = async (productName, productId) => {
        dispatch(removeProducts(userId, productId));
        toast("Xóa sản phẩm " + productName + " ra khỏi giỏ hàng!");
    };

    const handleAddition = (productId) => {
        dispatch(addToCart(userId, productId, 1));
    };

    const handleMinus = (productId) => {
        dispatch(minusFromCart(userId, productId, 1));
    };

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        cart.forEach(item => {
            totalAmount += item.sizePrice * item.quantityOrder;
        });
        return totalAmount;
    };
    const totalAmount = calculateTotalAmount();

    useEffect(() => {
        dispatch(getCartFromAPI());
    }, [totalItem]);

    return (
        <>
            <div className="shop">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1 className="text-light mb-3">Giỏ Hàng</h1>
                            </div>
                        </div>
                        <div className="col-lg-7"></div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}
            <div className="untree_co-section before-footer-section pt-5">
                <div className="row">
                    <div className="col-xxl-9">
                        <form className=" container" method="post">
                            <div className="site-blocks-table">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th className="product-thumbnail">Ảnh</th>
                                        <th className="product-name">Sản Phẩm</th>
                                        <th className="product-price">Giá</th>
                                        <th className="product-quantity">Số lượng</th>
                                        <th className="product-total">Tổng</th>
                                        <th className="product-remove">Xóa</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cart && cart.length !== 0 ? (
                                        cart.map((c, index) => (
                                            <tr key={index}>
                                                <td className="product-thumbnail">
                                                    <img src={c.imageName} alt="Image" className="img-fluid" />
                                                </td>
                                                <td className="product-name">
                                                    <h2 className="h5 text-black">{c.productName}</h2>
                                                </td>
                                                <td>{Util.formatCurrency(c.sizePrice)}</td>
                                                <td>
                                                    <div
                                                        className="input-group mb-3 d-flex align-items-center quantity-container"
                                                        style={{ maxWidth: 120 }}
                                                    >
                                                        <div className="input-group-prepend">
                                                            <button
                                                                className="btn btn-outline-black form-control"
                                                                type="button"
                                                                onClick={() => handleMinus(c.productId)}
                                                            >
                                                                -
                                                            </button>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control text-center quantity-amount"
                                                            value={c.quantityOrder || 0}
                                                        />
                                                        <div className="input-group-append ">
                                                            <button
                                                                className="btn btn-outline-black  form-control"
                                                                type="button"
                                                                onClick={() => handleAddition(c.productId)}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{Util.formatCurrency(c.sizePrice * c.quantityOrder)}</td>
                                                <td>
                                                    <i
                                                        onClick={() => handleRemoveFromCart(c.productName, c.productId)}
                                                        className="fa-solid fa-trash cart-trash-btn"
                                                    />
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6">
                                                <p style={{ textAlign: "center", fontWeight: "700" }}>
                                                    Không tìm thấy sản phẩm
                                                </p>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                    <div className="col-xxl-3 container mt-5">
                        <div>
                            <div className="row justify-content-center">
                                <div className="col-md-10 border-bottom mb-5">
                                    <h3 className="text-black h4 text-center text-uppercase">Thanh toán</h3>
                                </div>
                            </div>
                            <div className="row mb-3 text-center">
                                <div className="col-md-6">
                                    <span className="text-black">Tổng tiền hàng</span>
                                </div>
                                <div className="col-md-6 text-right">
                                    <strong className="text-black">{Util.formatCurrency(totalAmount)}</strong>
                                </div>
                            </div>
                            <div className="row mb-5 text-center">
                                <div className="col-md-6">
                                    <span className="text-black ">Tổng thanh toán</span>
                                </div>
                                <div className="col-md-6 text-right">
                                    <strong className="text-black">{Util.formatCurrency(totalAmount)}</strong>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <button
                                        className="btn btn-primary btn-lg py-3 btn-block"
                                    >
                                        Mua hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
