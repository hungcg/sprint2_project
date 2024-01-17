import "../css/login.css"
import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {loginUser} from "../redux/actions/AuthAction";
import {useDispatch} from "react-redux";
import * as Yup from "yup";


export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [disableSubmit, setDisableSubmit] = useState(false);
    const initValues = {
        username: "",
        password: "",
    };

    const validateFormLogin = Yup.object({
        username: Yup.string().required("Vui lòng nhập tên đăng nhập."),
        password: Yup.string().required("Vui lòng nhập mật khẩu."),
    });

    const handleSubmitFormLogin = async (values, { setFieldError }) => {
        try {
            setDisableSubmit(true);
            await dispatch(loginUser(values));
            toast.success("Đăng nhập thành công !");
            window.location.href="/";
        } catch (e) {
            setDisableSubmit(false);
            setFieldError("password", e.data);
        }
    };
    return (
        <>
            <div className="container-fluid vh-100 overflow-auto">
                <div className="row vh-100 ">
                    <div className="col-lg-6 bg-gray p-5 text-center"
                         style={{backgroundImage: "url('https://cdn.apartmenttherapy.info/image/upload/v1576792510/at/style/2019-12/Modern-Living-Room/image8.jpg')"}}>
                    </div>
                    <div className="col-lg-6 p  vh-100">
                        <div className="row d-flex vh-100" style={{backgroundColor: "#f5f8fc"}}>
                            <div className="col-md-7 p-4 ikigui m-auto text-center align-items-center">
                                <h4 className="text-center fw-bolder mb-4 fs-2">Chào mừng trở lại !</h4>
                                <Formik initialValues={initValues}
                                        onSubmit={(values, {setFieldErrors}) => handleSubmitFormLogin(values, {setFieldErrors})}
                                        validationSchema={validateFormLogin}>
                                    <Form>
                                        <div className="mb-3">

                                            <Field type="text" className="form-control" name="username"
                                                   id="username"/>
                                            <ErrorMessage name="username" className="text-danger"
                                                          component="p"/>
                                        </div>
                                        <div className="mb-3">
                                            <Field type="password" className="form-control" name="password"
                                                   id="password"/>
                                            <ErrorMessage name="password" className="text-danger"
                                                          component="p"/>
                                        </div>
                                        <div className="mb-3">
                                            <button  type="submit"
                                                    disabled={disableSubmit}
                                                    className="btn btn-primary form-control">Đăng nhập
                                            </button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Login;