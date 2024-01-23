import React, {useEffect, useRef, useState} from 'react';
import "../css/homepage.css"
import "../css/bootstrap.min.css"
import * as service from "../service/ProductService"
import * as Util from "../service/Util"
import Pagination from "./Pagination";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../redux/actions/CartAction";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import * as accountService from "../service/AuthService";


function Shop() {
    const [product, setProduct] = useState([]);
    const [minPrice, setMinPrice] = useState("0");
    const [maxPrice, setMaxPrice] = useState("25000000");
    const [category, setCategory] = useState([]);
    const [size, setSize] = useState([]);
    const [sizeName, setSizeName] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [productName, setProductName] = useState("");
    const myBtn = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const dispatch = useDispatch();
    // const existingUser = JSON.parse(localStorage.getItem("user"));
    // const userId = existingUser.id;
    // const flag = userId != null;
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart.productArr);

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


    const display = async () => {
        try {
            console.log(currentPage)
            const res = await service.findAll(currentPage, productName, sizeName, categoryName, minPrice, maxPrice);
            setProduct(res.data.content);
            setTotalPages(res.data.totalPages);

            console.log(res)

        } catch (e) {
        }
    }

    const displayCategory = async () => {
        try {
            const res = await service.getAllCategory()

            setCategory(res.data);
        } catch (e) {
        }
    }

    const displaySize = async () => {
        try {
            const res = await service.getAllSize()
            setSize(res.data);
        } catch (e) {
        }
    }
    const handleAddProductToCart = async (productId) => {
        console.log(productId,userId)
        if (userId) {
            dispatch(addToCart(userId, productId, 1));
            toast.success("Thêm vào giỏ hàng thành công!");
        } else {
            toast.success("Vui lòng đăng nhập!");
            navigate("/login");
        }
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goDetailsPage = (id) => {
        navigate(`/detail/${id}`);

    }


    useEffect(() => {
        display()
        displayCategory()
        displaySize()
    }, [currentPage, productName, sizeName, categoryName, minPrice, maxPrice]);


    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };
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
        if (myBtn && myBtn.current) {
            if (scrollPosition > 20) {
                myBtn.current.style.display = "block";
            } else {
                myBtn.current.style.display = "none";
            }
        }
    }, [scrollPosition]);

    return (
        <>
            <div className="untree_co-section product-section before-footer-section pt-5">
                <div className="row">
                    <div className="col-xxl-2 container">
                        <p className="content-title"><i className="fa-solid fa-sliders"/></p>
                        <hr/>
                        <div className="intro-excerpt">
                            <input type="text" placeholder="Tìm theo tên" className="form-control"
                                   onChange={(event) => setProductName(event.target.value)}/>
                            <select className="form-control"
                                    onChange={(event) => setCategoryName(event.target.value)}>
                                <option value="">Chọn loại sản phẩm</option>
                                {category.map(category => (
                                    <option key={category.id}
                                            value={category.name}>{category.name}</option>
                                ))}
                            </select>

                            <select className="form-control"
                                    onChange={(event) => setSizeName(event.target.value)}>
                                <option value="">Chọn size</option>
                                {size.map(size => (
                                    <option key={size.id}
                                            value={size.name}>{size.name}</option>
                                ))}
                            </select>

                            <input type="number" placeholder="Giá nhỏ nhất" value={minPrice} className="form-control"
                                   onChange={(event) => setMinPrice(event.target.value)}/>
                            <input type="number" placeholder="Giá lớn nhất" value={maxPrice}
                                   className="form-control"
                                   onChange={(event) => setMaxPrice(event.target.value)}/>
                            <div>
                                <label htmlFor="customRange3" className="form-label text-light ">Mức giá</label>
                                <input type="range" className="form-range " min="0" max="25000000" step="100000"
                                       id="customRange3"
                                       onChange={(event) => setMaxPrice(event.target.value)}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-10 container">
                        <p className="content-title">Danh Mục Sản Phẩm</p>
                        <hr/>
                        <div className="row ">
                            {/* Start Column 1 */}
                            {product && product.length !== 0 ? (
                                product.map((product) => (
                                    <div className="col-12 col-md-4 col-lg-3 mb-5">
                                        <a className="product-item" >
                                            <img style={{height: "300px", width: "350px"}}
                                                 onClick={() => goDetailsPage(product.productId)}
                                                 src={product.imageName} className="img-fluid product-thumbnail"
                                                 alt=""/>
                                            <h3 className="product-title">{product.name}</h3>
                                            <strong
                                                className="product-price">{Util.formatCurrency(product.sizePrice)}</strong>
                                            <button className="icon-cross"><img
                                                onClick={() => handleAddProductToCart(product.productId)}
                                                src="images/cross.svg"
                                                className="img-fluid"/></button>
                                        </a>
                                    </div>))) : (<div>
                                <p style={{textAlign: "center", fontWeight: "700"}}>Không tìm thấy sản phẩm</p>
                            </div>)}
                            {/* End Column 1 */}
                        </div>
                    </div>

                </div>
            </div>
            <Pagination page={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
            <button ref={myBtn} onClick={topFunction} id="myBtn" title="Go to top">TOP</button>
        </>
    );
}

export default Shop;