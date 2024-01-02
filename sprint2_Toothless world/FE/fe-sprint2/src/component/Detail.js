import React from 'react';
import "../css/bootstrap.min.css"
import "../css/detail.css"

function Detail() {
    return (
        <>
            {/* Single Product Start */}
            <div className="container-fluid py-5 mt-1">
                <div className="container py-5">
                    <div className="row g-4 mb-5">
                        <div className="col-lg-8 col-xl-9">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="border rounded">
                                        <a href="#">
                                            <img
                                                src="http://localhost:3000/images/product-1.png"
                                                className="img-fluid rounded"
                                                alt="Image"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="fw-bold mb-3">Nodric Chair</h4>
                                    <p className="mb-3">Category: Vegetables</p>
                                    <h5 className="fw-bold mb-3">3,35 $</h5>
                                    <div className="d-flex mb-4">
                                        <i className="fa fa-star text-secondary"/>
                                        <i className="fa fa-star text-secondary"/>
                                        <i className="fa fa-star text-secondary"/>
                                        <i className="fa fa-star text-secondary"/>
                                        <i className="fa fa-star"/>
                                    </div>
                                    <p className="mb-4">
                                        The generated Lorem Ipsum is therefore always free from
                                        repetition injected humour, or non-characteristic words etc.
                                    </p>
                                    <p className="mb-4">
                                        Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                                        peacock flounder; chain pickerel hatchetfish, pencilfish
                                        snailfish
                                    </p>
                                    <div className="input-group quantity mb-5" style={{width: 100}}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                                <i className="fa fa-minus"/>
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm text-center border-0"
                                            defaultValue={1}
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                <i className="fa fa-plus"/>
                                            </button>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                                    >
                                        <i className="fa fa-shopping-bag me-2 text-primary"/> Add to
                                        cart
                                    </a>
                                </div>
                                <div className="col-lg-12">
                                    <nav>
                                        <div className="nav nav-tabs mb-3">
                                            <button
                                                className="nav-link active border-white border-bottom-0"
                                                type="button"
                                                role="tab"
                                                id="nav-about-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-about"
                                                aria-controls="nav-about"
                                                aria-selected="true"
                                            >
                                                Description
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                                <form action="#">
                                    <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="border-bottom rounded">
                                                <input
                                                    type="text"
                                                    className="form-control border-0 me-4"
                                                    placeholder="Yur Name *"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="border-bottom rounded">
                                                <input
                                                    type="email"
                                                    className="form-control border-0"
                                                    placeholder="Your Email *"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="border-bottom rounded my-4">
                    <textarea
                        name=""
                        id=""
                        className="form-control border-0"
                        cols={30}
                        rows={8}
                        placeholder="Your Review *"
                        spellCheck="false"
                        defaultValue={""}
                    />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="d-flex justify-content-between py-3 mb-5">
                                                <div className="d-flex align-items-center">
                                                    <p className="mb-0 me-3">Please rate:</p>
                                                    <div
                                                        className="d-flex align-items-center"
                                                        style={{fontSize: 12}}
                                                    >
                                                        <i className="fa fa-star text-muted"/>
                                                        <i className="fa fa-star"/>
                                                        <i className="fa fa-star"/>
                                                        <i className="fa fa-star"/>
                                                        <i className="fa fa-star"/>
                                                    </div>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="btn border border-secondary text-primary rounded-pill px-4 py-3"
                                                >
                                                    {" "}
                                                    Post Comment
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Product End */}
        </>

    );
}

export default Detail;