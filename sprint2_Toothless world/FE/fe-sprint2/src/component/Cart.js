import React, {useEffect, useState} from 'react';
import "../css/homepage.css";
import "../css/bootstrap.min.css";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, getCartFromAPI, minusFromCart, removeProducts} from "../redux/actions/CartAction";
import {toast} from "react-toastify";
import * as Util from "../service/Util";
import PayPalButtons from "./PayPalButton";
import * as accountService from "../service/AuthService";
import * as ProductService from "../service/ProductService";


function Cart() {


    const dispatch = useDispatch();
    const existingUser = JSON.parse(localStorage.getItem("user"));
    const usersID = existingUser.id;


    const cart = useSelector(state => state.cart.productArr);
    const totalItem = useSelector(state => state.cart.totalItem)
    const [totalAmount, setTotalAmount] = useState(0)


    const [userId, setUserId] = useState()
    const [username, setUsername] = useState("")
    const [user, setUser] = useState({})
    const infoUsername = async () => {
        let res = await accountService.infoToken()
        if (res) {
            setUsername(res.sub)
            let res1 = JSON.parse(localStorage.getItem("user"))
            setUserId(res1.id)
            console.log(res1.id)
        }
    }

    useEffect(() => {
        infoUsername()
    }, []);


    const displayUserDetails = async () => {
        const res = await ProductService.getUserDetails(usersID);
        setUser(res.data);
        console.log(res)
    }


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
        // Làm tròn đến 1 chữ số thập phân
        return parseFloat(totalAmount.toFixed(1));
    }


    useEffect(() => {
        displayUserDetails()
        dispatch(getCartFromAPI());
        setTotalAmount(calculateTotalAmount())
    }, [totalItem, userId]);

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
                                            <td className="product-thumbnail text-center">
                                                <img style={{height:"200px",width:"200px",borderRadius:"10px"}}
                                                     src={c.imageName} alt="Image" className="img-fluid"/>
                                            </td>
                                            <td className="product-name">
                                                <h2 className="h5 text-black">{c.productName}</h2>
                                            </td>
                                            <td>{Util.formatCurrency(c.sizePrice)}</td>
                                            <td>
                                                <div
                                                    className="input-group mb-3 d-flex align-items-center quantity-container text-center"
                                                    style={{maxWidth: 120, left: "17px"}}
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
                                                    <input style={{borderRadius: "10px"}}
                                                           type="text"
                                                           className="form-control text-center quantity-amount"
                                                           value={c.quantityOrder || 0}
                                                           readOnly={true}
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
                                            <p style={{textAlign: "center", fontWeight: "700"}}>
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
                    <div className="row justify-content-center">
                        <div className="col-md-10 border-bottom mb-5">
                            <h3 className="text-black h4 text-center text-uppercase fw-bold">Thanh toán</h3>
                        </div>

                    </div>
                    {user ? (
                            <div>
                            <div className="row mb-3">
                            <div className="col-md-6">
                                <span className="text-black">Tên người nhận</span>
                            </div>
                            <div className="col-md-6 text-right">
                                <i className="text-black fw-bold">{user.name}</i>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <span className="text-black">Số điện thoại</span>
                            </div>
                            <div className="col-md-6 text-right">
                                <i className="text-black fw-bold">{user.phone}</i>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <span className="text-black">Địa chỉ</span>
                            </div>
                            <div className="col-md-6 text-right">
                                <i className="text-black fw-bold">{user.address}</i>
                            </div>
                        </div>
                    </div>
                    ):<div>
                        <p>Không có dữ liệu</p>
                    </div>}
                    <hr/>
                    <div className="row mb-3 ">
                        <div className="col-md-6  ">
                            <span className="text-black">Tổng tiền hàng</span>
                        </div>
                        <div className="col-md-6 text-right">
                            <strong className="text-black">{Util.formatCurrency(totalAmount)}</strong>
                        </div>
                    </div>
                    <div className="row mb-5 ">
                        <div className="col-md-6">
                            <span className="text-black ">Tổng thanh toán</span>
                        </div>
                        <div className="col-md-6 text-right">
                            <strong className="text-black">{Util.formatCurrency(totalAmount)}</strong>
                        </div>
                    </div>
                    <div className="row mb-5 ">
                        <div className="col-md-6">
                            <span className="text-black ">Tổng tiền sau quy đổi</span>
                        </div>
                        <div className="col-md-6 text-right">
                            <strong className="text-black">{(totalAmount / 20000).toFixed(1)} USD</strong>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {cart && cart.length > 0 ? (
                                <>
                                    <div className="t-mb-0 ">
                                        <PayPalButtons totalAmount={calculateTotalAmount()}></PayPalButtons>
                                    </div>
                                </>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

</>
)
    ;
}

export default Cart;
