import React from 'react';
import "../css/login.css"


function Login() {
    return (
        <>
            <div className="container-fluid vh-100 overflow-auto">
                <div className="row vh-100 ">
                    <div className="col-lg-6 bg-gray p-5 text-center"
                         style={{backgroundImage:"url('https://cdn.apartmenttherapy.info/image/upload/v1576792510/at/style/2019-12/Modern-Living-Room/image8.jpg')"}}>
                        <div className="img-cover p-4">
                            <img src="assets/images/loginbg.svg" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 p  vh-100">
                        <div className="row d-flex vh-100" style={{backgroundColor:"#f5f8fc"}}>
                            <div className="col-md-7 p-4 ikigui m-auto text-center align-items-center">
                                <h4 className="text-center fw-bolder mb-4 fs-2">Chào mừng trở lại !</h4>
                                <div className="input-group mb-4">
            <span
                className="input-group-text border-end-0 inbg"
                id="basic-addon1"
            >
              <i className="bi bi-person"/>
            </span>
                                    <input
                                        type="text"
                                        className="form-control ps-2 border-start-0 fs-7 inbg form-control-lg mb-0"
                                        placeholder="Enter Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                                <div className="input-group mb-4">
            <span
                className="input-group-text border-end-0 inbg"
                id="basic-addon1"
            >
              <i className="bi bi-lock"/>
            </span>
                                    <input
                                        type="password"
                                        className="form-control ps-2 fs-7 border-start-0 form-control-lg inbg mb-0"
                                        placeholder="Enter Password"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                                <button className="btn btn-lg fw-bold fs-7 btn-success  w-100">
                                    Đăng nhập
                                </button>
                                <p className="text-center py-4 fw-bold fs-8">
                                    Quên mật khẩu?
                                </p>
                                <ul className="d-inline-block mx-auto">
                                    <li className="float-start px-3">
                                        <a href="">
                                            <i className="bi bi-facebook"/>
                                        </a>
                                    </li>
                                    <li className="float-start px-3">
                                        <a href="">
                                            <i className="bi bi-twitter"/>
                                        </a>
                                    </li>
                                    <li className="float-start px-3">
                                        <a href="">
                                            <i className="bi bi-linkedin"/>
                                        </a>
                                    </li>
                                    <li className="float-start px-3">
                                        <a href="">
                                            <i className="bi bi-google"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Login;