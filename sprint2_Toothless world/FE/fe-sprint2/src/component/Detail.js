import React, {useEffect, useRef, useState} from 'react';
import "../css/bootstrap.min.css"
import "../css/detail.css"
import {useNavigate, useParams} from "react-router-dom";
import * as service from "../service/ProductService";
import * as Util from "../service/Util";
import {addToCart, minusFromCart} from "../redux/actions/CartAction";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";


function Detail() {

    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const myBtn = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);
    const dispatch = useDispatch();
    const existingUser = JSON.parse(localStorage.getItem("user"));
    const userId = existingUser.id;
    const flag = userId != null;
    const cart = useSelector(state => state.cart.productArr);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };
    console.log(userId)
    console.log(detail)
    const topFunction = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > 20) {
            myBtn.current.style.display = "block";
        } else {
            myBtn.current.style.display = "none";
        }
    }, [scrollPosition]);


    const displayDetail = async () => {
        const res = await service.getProductDetails(id);
        setDetail(res.data);
    }
    
    const handleAddProductToCart = async (productId) => {
        if (flag) {
            dispatch(addToCart(userId, productId, quantity));
            toast.success("Thêm vào giỏ hàng thành công!");
        } else {

            toast.success("Vui lòng đăng nhập!");
            navigate("/login");
        }
    }


    useEffect(() => {
        displayDetail();
    }, [id, quantity]);

    return (
        <>
            {/* Single Product Start */}
            <div className="container py-5 mt-1">
                <div className="row container">
                    <div className="col-xxl-6 container ">
                        <div className="">
                            <a href="#">
                                <img
                                    src={detail.imageName}
                                    className="img-fluid rounded"
                                    alt="Image" style={{width: "413.150px", height: "413.150px", objectFit: "cover"}}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-xxl-6 container">
                        <h4 className="fw-bold mb-3">{detail.name}</h4>
                        <p className="mb-3">{detail.categoryName}</p>
                        <h5 className="fw-bold mb-3">{Util.formatCurrency(detail.sizePrice)}</h5>
                        <p className="mb-4">
                            {detail.description}
                        </p>
                        {/*<div className="input-group quantity mb-5" style={{width: 100}}>*/}
                        {/*    <div className="input-group-btn">*/}
                        {/*        <button className="btn btn-sm btn-minus rounded-circle bg-light border"*/}
                        {/*                onClick={() => handleMinus(detail.productId)}>*/}
                        {/*            <i className="fa fa-minus"/>*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        className="form-control form-control-sm text-center border-0"*/}
                        {/*        defaultValue={1}*/}
                        {/*    />*/}
                        {/*    <div className="input-group-btn">*/}
                        {/*        <button className="btn btn-sm btn-plus rounded-circle bg-light border"*/}
                        {/*                onClick={() => handleAddition(detail.productId)}>*/}
                        {/*            <i className="fa fa-plus"/>*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <button
                            className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                            onClick={() => handleAddProductToCart(detail.productId)}
                        >
                            <i className="fa fa-shopping-bag me-2 text-primary"
                            /> Add to
                            cart
                        </button>
                    </div>
                </div>
            </div>

            <button ref={myBtn} onClick={topFunction} id="myBtn" title="Go to top">TOP</button>
            {/* Single Product End */}
        </>

    );
}

export default Detail;