import React, {useEffect, useState} from 'react';
import * as Util from "../service/Util";
import {Link, useNavigate} from "react-router-dom";
import * as service from "../service/OrderService";
import Pagination from "./Pagination";


function HistoryOrder() {
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [orderCode,setOrderCode] = useState("")

    const displayHistory = async () => {
        const res = await service.getOrderByUsername(currentPage,orderCode);
        setOrder(res.content);
        setTotalPages(res.totalPages);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goOrderDetails = (id) => {
        navigate(`/orderDetail/${id}`);
    }




    useEffect(() => {
        displayHistory()
    }, [currentPage]);


    return (
        <>
            <div className="shop">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1 className="text-light mb-3">Lịch sử mua hàng</h1>
                            </div>
                        </div>
                        <div className="col-lg-7"></div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}
            <div className="untree_co-section before-footer-section pt-5">
                <div className="row">
                    <div className="col-xxl-12">
                        <form className=" container" method="post">
                            <div className="site-blocks-table">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th className="product-thumbnail">Mã đơn hàng</th>
                                        <th className="product-price">Ngày mua</th>
                                        <th className="product-price">Giờ mua</th>
                                        <th className="product-price">Giá trị đơn hàng (VND) </th>
                                        <th className="product-price">Chi tiết </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {order && order.length !== 0 ? (
                                        order.map((c, index) => (
                                            <tr key={index}  >
                                                <td className="product-thumbnail">
                                                   {c.orderCode}
                                                </td>
                                                <td>{new Date(c.dateOfOrder).toLocaleDateString()}</td>
                                                <td>{new Date(c.dateOfOrder).toLocaleTimeString()}</td>
                                                <td className="h5 text-black">{Util.moneyStandard(c.totalMoney)}</td>
                                                <td className="h5 text-black">
                                                    <Link to={`/orderDetail/${c.orderId}`} >
                                                        <button  type="button" className="btn btn-secondary">Chi tiết</button></Link>

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
                </div>
            </div>
            <Pagination page={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
        </>
    );
}

export default HistoryOrder;