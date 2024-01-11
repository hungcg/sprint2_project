import React, {useEffect, useRef, useState} from 'react';
import "../css/homepage.css"
import "../css/bootstrap.min.css"
import * as service from "../service/ProductService"
import * as Util from "../service/Util"
import Pagination from "./Pagination";

function Shop() {
    const [product, setProduct] = useState([]);
    const [minPrice, setMinPrice] = useState("0");
    const [maxPrice, setMaxPrice] = useState("10000");
    const [category, setCategory] = useState([]);
    const [size, setSize] = useState([]);
    const [sizeName, setSizeName] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [productName, setProductName] = useState("");
    const myBtn = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);


    const display = async () => {
        try {
            const res = await service.findAll(currentPage, productName, sizeName, categoryName, minPrice, maxPrice);
            setProduct(res.data.content);
            setTotalPages(res.data.totalPages);
            console.log(res.data.content)
        } catch (e) {
            console.log(e)
        }
    }

    const displayCategory = async () => {
        try {
            const res = await service.getAllCategory()
            console.log(res)
            setCategory(res.data);
        } catch (e) {
            console.log(e)
        }
    }

    const displaySize = async () => {
        try {
            const res = await service.getAllSize()
            console.log(res)
            setSize(res.data);
        } catch (e) {
            console.log(e)
        }
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


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
            {/*<div className="shop">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* End Hero Section */}

            <div className="untree_co-section product-section before-footer-section pt-5">
                <div className="row">
                    <div className="col-xxl-2 container">
                        <p className="content-title"><i className="fa-solid fa-sliders"/></p>
                        <hr/>
                        <div className="intro-excerpt">
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
                            <input type="text" placeholder="Tìm theo tên" className="form-control"
                                   onChange={(event) => setProductName(event.target.value)}/>
                            <input type="number" placeholder="Giá nhỏ nhất" value={minPrice} className="form-control"
                                   onChange={(event) => setMinPrice(event.target.value)}/>
                            <input type="number" placeholder="Giá lớn nhất" value={maxPrice}
                                   className="form-control"
                                   onChange={(event) => setMaxPrice(event.target.value)}/>
                            <div>
                                <label htmlFor="customRange3" className="form-label text-light ">Mức giá</label>
                                <input type="range" className="form-range " min="0" max="200" step="5"
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
                                        <a className="product-item" href="#">
                                            <img style={{height: "300px", width: "350px"}}
                                                 src={product.imageName} className="img-fluid product-thumbnail"
                                                 alt=""/>
                                            <h3 className="product-title">{product.name}</h3>
                                            <h3 className="product-title">{product.sizeName}</h3>
                                            <h3 className="product-title">{product.categoryName}</h3>
                                            <strong
                                                className="product-price">{Util.formatCurrency(product.sizePrice)}</strong>
                                            <span className="icon-cross"><img src="images/cross.svg"
                                                                              className="img-fluid"
                                                                              alt=""/></span>
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