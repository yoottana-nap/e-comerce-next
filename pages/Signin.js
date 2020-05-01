import React from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import FieldEmail from '../components/FieldComponents/FieldEmail'
import FieldPassword from '../components/FieldComponents/FieldPassword'
import ButtonSubmit from '../components/FieldComponents/ButtonSubmit'
import MainLayout from '../components/MainLayout/MainLayout';
import validate from '../Validate/SigninValidator';
import { service } from '../api/BaseApi';
import Cookies from 'js-cookie'
import { mapDispatchToProps } from '../store/usersReducer/UserReducer';
const Signin = (props) => {
    let { handleSubmit, loadedDataUser } = props;
    const dispatch = useDispatch();
    const singinSubmit = (data) => {
        if (data) {
            service({
                method: 'post',
                url: 'users/Login/',
                data: {
                    email: data.email,
                    password: data.password,
                }
            })
                .then((response) => {
                    if (response) {
                        let cookieGenerate = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                        Cookies.set('verify_secure', cookieGenerate, { expires: 1 }, { secure: true });
                        loadedDataUser(response.data)
                        alert("เข้าสู่ระบบสำเร็จ");
                        Router.push('/');
                    }
                }).catch(err => {
                    setTimeout(() => {
                        alert("กรุณาตรวจสอบอีเมลล์และรหัสผ่านของคุณ");
                    }, 5000)

                })
        }
        dispatch(reset('Signin'));
    }
    return (
        <MainLayout>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-5">
                        <img src="signin.jpg" className="w-100" />
                    </div>
                    <div className="col-md-6 mt-5">
                        <h5 className="mt-5">
                            เข้าสู่ระบบ
                        </h5>
                        <form onSubmit={handleSubmit(singinSubmit)} className="text-left row ">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="email">อีเมลล์</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        component={FieldEmail}
                                        styleTextError="text-danger"
                                        placeholder="โปรดกรอกอีเมลล์"
                                    />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="password">รหัสผ่าน</label>
                                    <Field
                                        name="password"
                                        type="password"
                                        component={FieldPassword}
                                        styleTextError="text-danger"
                                        placeholder="โปรดกรอกรหัสผ่าน"
                                    />
                                </div>
                            </div>

                            <div className="col-12 text-right">
                                <Field
                                    label="เข้าสู่ระบบ"
                                    name="submit"
                                    type="submit"
                                    style="btn btn-primary btn-block"
                                    component={ButtonSubmit}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

const SigninConnectStore = connect(state => state.userReducer, mapDispatchToProps)(Signin);
export default reduxForm({ form: 'Signin', validate })(SigninConnectStore);