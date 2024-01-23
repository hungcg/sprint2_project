import React, {useEffect, useRef, useState} from 'react';
import "../css/homepage.css"
import "../css/bootstrap.min.css"
import {Link} from "react-router-dom";


function HomePage() {
    const myBtn = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);


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
            {/* End Header/Navigation */}
            {/* Start Hero Section */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>
                                    Vẻ đẹp hoàn hảo <span className="d-block">Tinh tế sáng tạo</span>
                                </h1>
                                <p className="mb-4">
                                    Chạm nhẹ vào lối sống tinh tế, nâng tầm vẻ đẹp của không gian bằng nội thất độc đáo
                                    và sang trọng.
                                </p>
                                <p>
                                    <Link href="" style={{
                                        fontWeight: "600",
                                        padding: "12px 30px",
                                        borderRadius: "30px", fontSize: "1.1rem"
                                    }}
                                          className="btn btn-secondary text-dark me-3" to="/shop">
                                        Cửa hàng
                                    </Link>
                                    <Link href="#" style={{
                                        fontWeight: "600",
                                        padding: "12px 30px",
                                        borderRadius: "30px"
                                    }}
                                          className="btn btn-white-outline text-light" to="/shop">
                                        Khám phá
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img
                                    src="https://themewagon.github.io/furni/images/couch.png"
                                    className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}
            {/* Start Product Section */}
            <div className="product-section">
                <div className="container">
                    <div className="row">
                        {/* Start Column 1 */}
                        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 className="mb-4 section-title">
                                Được chế tạo bằng vật liệu tuyệt vời.
                            </h2>
                            <p className="mb-4">
                                Với màu sắc trung tính, nó là sự bổ sung tuyệt vời cho phòng khách hiện đại, tạo nên
                                không gian thoải mái và trang nhã..{" "}
                            </p>
                            <p>
                                <Link style={{
                                    fontWeight: "600",
                                    padding: "12px 30px",
                                    borderRadius: "30px"
                                }} className="btn btn-dark text-light" to="/shop">
                                    Khám phá
                                </Link>
                            </p>
                        </div>
                        {/* End Column 1 */}
                        {/* Start Column 2 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <Link className="product-item" to="/shop">
                                <img
                                    style={{height: "270px", width: "300px"}}
                                    src="https://i.pinimg.com/564x/7e/d4/34/7ed4343b271f1e16767c5476f346bced.jpg"
                                    className="img-fluid product-thumbnail"
                                />
                                <h3 className="product-title">Sofa Rustic Comfort</h3>
                            </Link>
                        </div>
                        {/* End Column 2 */}
                        {/* Start Column 3 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <Link className="product-item" to="/shop">
                                <a className="product-item">
                                    <img
                                        style={{height: "270px", width: "300px"}}
                                        src="https://i.pinimg.com/564x/5c/a2/ad/5ca2ad5067e22dd59a88c44ed04cf91b.jpg"
                                        className="img-fluid product-thumbnail"
                                    />
                                    <h3 className="product-title">Kruzo Aero Chair</h3>

                                </a>
                            </Link>
                        </div>
                        {/* End Column 3 */}
                        {/* Start Column 4 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <Link className="product-item" to="/shop">
                                <a className="product-item">
                                    <img
                                        style={{height: "270px", width: "300px"}}
                                        src="https://i.pinimg.com/564x/0f/42/50/0f4250e40aedc53e5fed095f26e48509.jpg"
                                        className="img-fluid product-thumbnail"
                                    />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                </a>
                            </Link>
                        </div>
                        {/* End Column 4 */}
                    </div>
                </div>
            </div>
            {/* End Product Section */}
            {/* Start Why Choose Us Section */}
            <div className="why-choose-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <h2 className="section-title">Tại sao chọn chúng tôi</h2>
                            <p>
                                Một chiếc sofa đơn với kiểu dáng độc đáo làm tăng thêm vẻ đẹp của phòng ngủ. Chất liệu
                                vải nhẹ và các họa tiết tinh tế tạo nên không gian riêng tư và thoải mái, là nơi lý
                                tưởng để đọc sách hoặc thư giãn.
                            </p>
                            <div className="row my-5">
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img
                                                src="https://themewagon.github.io/furni/images/truck.svg"
                                                alt="Image"
                                                className="imf-fluid"
                                            />
                                        </div>
                                        <h3>Giao hàng Nhanh &amp; Miễn phí </h3>
                                        <p>
                                            Trải nghiệm giao hàng nhanh chóng và miễn phí với dịch vụ của chúng tôi!
                                            Chúng tôi cam kết mang đến sự thuận tiện và hài lòng cho khách hàng bằng
                                            cách cung cấp dịch vụ giao hàng nhanh nhất. </p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img
                                                src="https://themewagon.github.io/furni/images/bag.svg"
                                                alt="Image" className="imf-fluid"/>
                                        </div>
                                        <h3>Thuận tiện mua sắm </h3>
                                        <p>
                                            Trải nghiệm mua sắm thuận tiện tại cửa hàng của chúng tôi là ưu tiên hàng
                                            đầu của chúng tôi. Chúng tôi hiểu rằng thời gian và sự tiện lợi của khách
                                            hàng là quan trọng. </p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img
                                                src="https://themewagon.github.io/furni/images/support.svg"
                                                alt="Image"
                                                className="imf-fluid"
                                            />
                                        </div>
                                        <h3>Hỗ trợ 24/7 </h3>
                                        <p>
                                            Để đảm bảo rằng bạn luôn có sự hỗ trợ khi cần thiết, chúng tôi tự hào cung
                                            cấp dịch vụ hỗ trợ 24/7. Chúng tôi hiểu rằng nhu cầu và thắc mắc của khách
                                            hàng có thể xuất hiện vào bất kỳ thời điểm nào trong ngày hoặc đêm. </p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img
                                                src="https://themewagon.github.io/furni/images/return.svg"
                                                alt="Image"
                                                className="imf-fluid"
                                            />
                                        </div>
                                        <h3>Đổi trả dễ dàng</h3>
                                        <p>
                                            Chính sách đổi trả dễ dàng là cam kết của chúng tôi để đảm bảo rằng bạn hài
                                            lòng với mọi giao dịch mua sắm. Chúng tôi hiểu rằng có thể có những trường
                                            hợp khi bạn cần thay đổi hoặc trả lại sản phẩm </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="img-wrap">
                                <img
                                    src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg"
                                    alt="Image"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Why Choose Us Section */}
            {/* Start We Help Section */}
            <div className="we-help-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="imgs-grid">
                                <div className="grid grid-1">
                                    <img
                                        src="https://themewagon.github.io/furni/images/img-grid-1.jpg"
                                        alt="Untree.co"/>
                                </div>
                                <div className="grid grid-2">
                                    <img
                                        src="https://themewagon.github.io/furni/images/img-grid-2.jpg"
                                        alt="Untree.co"/>
                                </div>
                                <div className="grid grid-3">
                                    <img
                                        src="https://themewagon.github.io/furni/images/img-grid-3.jpg"
                                        alt="Untree.co"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 ps-lg-5">
                            <h2 className="section-title mb-4">
                                Chúng tôi giúp bạn cải thiện không gian sống
                            </h2>
                            <p>
                                Chất liệu vải chống bám bụi và dễ lau chùi giúp chiếc sofa này trở thành lựa chọn thông
                                minh cho những gia đình có trẻ nhỏ hoặc thú cưng. Bạn có thể dễ dàng duy trì vẻ mới và
                                sạch sẽ của nó.
                            </p>
                            <ul className="list-unstyled custom-list my-4">
                                <li>Ghế Sofa Chống Bám Bụi và Dễ Lau Chùi</li>
                                <li>Sofa Phòng Khách Hiện Đại</li>
                                <li>Sofa Ngoại Thất Bền Bỉ Cho Sân Vườn</li>
                                <li>Sofa Phòng Khách Retro với Chân Gỗ Mộc Mạc</li>
                            </ul>
                            <p>
                                <Link className="product-item" to="/shop">
                                    <a href="shop.html" style={{
                                        fontWeight: "600",
                                        padding: "12px 30px",
                                        borderRadius: "30px"
                                    }} className="btn btn-dark text-light">
                                        Khám phá
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End We Help Section */}
            {/* Start Popular Product */}
            <div className="popular-product">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img
                                        src="https://themewagon.github.io/furni/images/product-1.png"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="pt-3">
                                    <h3>Nordic Chair</h3>
                                    <p>
                                        Với màu sắc trung tính, nó là sự bổ sung tuyệt vời cho phòng khách hiện đại, tạo
                                        nên không gian thoải mái và trang nhã..{" "}
                                        {" "}
                                    </p>
                                    <p>
                                        <a href="#">Read More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img
                                        src="https://themewagon.github.io/furni/images/product-2.png"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="pt-3">
                                    <h3>Kruzo Aero Chair</h3>
                                    <p>
                                        Chất liệu da hoặc vải chất lượng cao thêm vào sự sang trọng và ấm cúng.{" "}
                                    </p>
                                    <p>
                                        <a href="#">Read More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img
                                        src="https://themewagon.github.io/furni/images/product-3.png"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="pt-3">
                                    <h3>Ergonomic Chair</h3>
                                    <p>
                                        Với chân gỗ mộc mạc và các đường nét retro, chiếc sofa này mang đến một không
                                        gian phòng khách với phong cách độc đáo và ấn tượng{" "}
                                    </p>
                                    <p>
                                        <a href="#">Read More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button ref={myBtn} onClick={topFunction} id="myBtn" title="Go to top">TOP</button>
        </>

    );
}

export default HomePage;