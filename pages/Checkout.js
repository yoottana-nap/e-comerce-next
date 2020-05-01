import React, { useEffect } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect, useDispatch } from 'react-redux';
import MainLayout from '../components/MainLayout/MainLayout';
import Banner from '../components/Banner/Banner';
import Router from 'next/router';
import FieldFirstName from '../components/FieldComponents/FieldFirstName';
import FieldLastName from '../components/FieldComponents/FieldLastName';
import FieldAddress from '../components/FieldComponents/FieldAddress';
import FieldDistrict from '../components/FieldComponents/FieldDistrict';
import FieldArea from '../components/FieldComponents/FieldArea';
import FieldProvince from '../components/FieldComponents/FieldProvince';
import FieldPostal from '../components/FieldComponents/FieldPostal';
import FieldTel from '../components/FieldComponents/FieldTel';
import ButtonSubmit from '../components/FieldComponents/ButtonSubmit';
import validate from '../Validate/CheckoutValidate';
import Cookies from 'js-cookie';
import axios from 'axios';
import { mapDispatchToProps } from '../components/ProductDetailComponent/AddToCartContainer';
const Checkout = (props) => {
    const { cartreducer } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        if (!Cookies.get('verify_secure')) {
            alert('คุณยังไม่ได้ทำการเข้าสู่ระบบ');
            Router.push('/signin');
        }
    }, []);
    let { handleSubmit, userReducer } = props;
    const submitCheckout = (data) => {
        if (!Cookies.get('verify_secure')) {
            Router.push('/signin');
        }
        else {
            // Post Data to keep order user in array 
            if (data) {
                let billNumberGenerate = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                // axios.post(`http://localhost:5000/routes/api/Users/addOrder`
                axios.post('http://localhost:5000/routes/api/Users/addOrder', {
                    first_name: userReducer.userData.first_name,
                    orders: {
                        id: billNumberGenerate,
                        name: data.firstName,
                        last_name: data.lastName,
                        adress: data.address,
                        district: data.district,
                        area: data.area,
                        province: data.province,
                        postal: data.postal,
                        telephone: data.tel,
                        cart: cartreducer.addedItems,
                        total_cost: cartreducer.total
                    }
                }).then((response) => {
                    console.log(response)
                    if (response) {
                        alert("ดำเนินการสำเร็จ");
                        Cookies.remove('verify_secure')
                        Router.push('/payment');
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
            dispatch(reset('Checkout'));
        }
    }

    return (
        <MainLayout>
            <style jsx>
                {`
                label{
                    font-family: Kanit;
                    font-size: 20px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: normal;
                    text-align: left;
                    color: #000000;
                }
                input{
                    border: solid 1px #707070;
                    background-color: #ffffff;
                }
                .btn-checkout{
                    border: solid 1px #707070;
                    background-color: #000000;
                    color:#fff;
                    font-size: 30px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: normal;
                  }
                `}
            </style>
            <Banner paddingBanner="0%" imageSrc={"https://drive.google.com/uc?id=1nvFKm8pQcBSHKB_ZPMK3iYoLW-PHygJR"} routeName="CHECKOUT" />
            <div className="container  my-5">
                <div className="row">
                    <div className="col-10 mx-auto my-5">
                        <form onSubmit={handleSubmit(submitCheckout)}>
                            <div className="form-group row text-left">
                                <div className="col-md-6 my-2 col-12">
                                    <label className="font-weight-bold" htmlFor="firstName">ชื่อ</label>
                                    <Field
                                        name="firstName"
                                        type="text"
                                        component={FieldFirstName}
                                        styleTextError="text-danger"
                                        placeholder="โปรดกรอกชื่อจริง"
                                    />
                                </div>
                                <div className="col-md-6 my-2 col-12">
                                    <label className="font-weight-bold" htmlFor="lastName">นามสกุล</label>
                                    <Field
                                        name="lastName"
                                        type="text"
                                        component={FieldLastName}
                                        styleTextError="text-danger"
                                        placeholder="โปรดกรอกชื่อนามสกุล"
                                    />
                                </div>
                                <div className="col-md-12 my-2 col-12">
                                    <label className="font-weight-bold" htmlFor="address" >ที่อยู่</label>
                                    <Field
                                        name="address"
                                        type="text"
                                        component={FieldAddress}
                                        styleTextError="text-danger"
                                        placeholder="ที่อยู่"
                                    />
                                </div>
                                <div className="col-md-12 my-2 col-12">
                                    <label name="district" className="font-weight-bold" htmlFor="district">แขวง / ตำบล</label>
                                    <Field
                                        name="district"
                                        type="text"
                                        component={FieldDistrict}
                                        styleTextError="text-danger"
                                        placeholder="แขวง / ตำบล"
                                    />
                                </div>
                                <div className="col-md-12 my-2 col-12">
                                    <label name="area" className="font-weight-bold" htmlFor="area">เขต / อำเภอ</label>
                                    <Field
                                        name="area"
                                        type="text"
                                        component={FieldArea}
                                        styleTextError="text-danger"
                                        placeholder="เขต / อำเภอ"
                                    />
                                </div>
                                <div className="col-md-12 my-2 col-12">
                                    <label name="province" className="font-weight-bold" htmlFor="province">จังหวัด</label>
                                    <Field
                                        name="province"
                                        type="text"
                                        component={FieldProvince}
                                        styleTextError="text-danger"
                                        placeholder="จังหวัด"
                                    />
                                </div>
                                <div className="col-md-12 my-2 col-12">
                                    <label name="postal" className="font-weight-bold" htmlFor="postal">รหัสไปรษณีย์</label>
                                    <Field
                                        name="postal"
                                        type="text"
                                        component={FieldPostal}
                                        styleTextError="text-danger"
                                        placeholder="รหัสไปรษณีย์"
                                    />
                                </div>
                                <div className="col-md-12 my-2 col-12">
                                    <label name="tel" className="font-weight-bold" htmlFor="tel">เบอร์โทรศัพท์</label>
                                    <Field
                                        name="tel"
                                        type="text"
                                        component={FieldTel}
                                        styleTextError="text-danger"
                                        placeholder="เบอร์โทรศัพท์"
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 col-12 p-1 text-left">
                                    <Field
                                        style="btn-black"
                                        label="ยืนยันคำสั่งซื้อ"
                                        name="submit"
                                        type="submit"
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
const connectCheckoutStore = connect(state => state, mapDispatchToProps)(Checkout);
export default reduxForm({ form: 'Checkout', validate })(connectCheckoutStore);