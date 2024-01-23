import React, {useEffect, useState} from 'react';
import * as Util from "../service/Util";
import {useNavigate, useParams} from "react-router-dom";
import * as service from "../service/OrderService";


function OrderDetail() {
    const {id} = useParams();
    const [orderDetails, setOrderDetails] = useState([]);
    const navigate = useNavigate();
    console.log(id)


    const displayOrderDetails = async () => {
        try {
            const res = await service.getOrderDetails(id);
            setOrderDetails(res);
        } catch (e) {
            alert(e)
        }
    }


    useEffect(() => {
        displayOrderDetails()
    }, []);


    return (
        <>
            <div className="shop">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1 className="text-light mb-3">Chi tiết đơn hàng</h1>
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
                                        <th className="product-price">Giá trị đơn hàng (VND)</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {orderDetails && orderDetails.length !== 0 ? (
                                        orderDetails.map((od, index) => (
                                            <tr key={index}>
                                                <td className="product-thumbnail">
                                                    {od.productName}
                                                </td>
                                                <td>{od.quantity}</td>
                                                <td>{od.categoryName}</td>
                                                <td className="h5 text-black">{Util.moneyStandard(od.priceOder)}</td>
                                            </tr>))
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
        </>
    );
}

export default OrderDetail;