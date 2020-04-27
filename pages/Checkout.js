import React from 'react';
import Banner from '../components/Banner/Banner';
import Router from 'next/router';
import MainLayout from '../components/MainLayout/MainLayout';
const Checkout = () => {
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
                        <form>
                            <div className="form-group row text-left">
                                <div className="col-md-6 my-2 col-12">
                                    <label className="font-weight-bold" for="firstName">ชื่อ</label>
                                    <input name="firstName" type="text" className="form-control" id="firstName" />
                                </div>
                                <div className="col-md-6 my-2 col-12">
                                    <label className="font-weight-bold" for="lastName">นามสกุล</label>
                                    <input name="lastName" type="text" className="form-control" id="lastName" />
                                </div>
                                <div className="col-md-12 my-2 col-12">
                                    <label className="font-weight-bold" for="address" >ที่อยู่</label>
                                    <input name="address" type="text" className="form-control" id="address" />
                                </div>
                                <div className="col-md-12 my-2 col-12">
                                    <label name="district" className="font-weight-bold" for="district">แขวง / ตำบล</label>
                                    <input type="text" className="form-control" id="district" />
                                </div>
                                <div className="col-md-12 my-2 col-12">
                                    <label name="area" className="font-weight-bold" for="area">เขต / อำเภอ</label>
                                    <input type="text" className="form-control" id="area" />
                                </div>
                                <div className="col-md-12 my-2 col-12">
                                    <label name="province" className="font-weight-bold" for="province">จังหวัด</label>
                                    <input type="text" className="form-control" id="province" />
                                </div>
                                <div className="col-md-12 my-2 col-12">
                                    <label name="postal" className="font-weight-bold" for="postal">รหัสไปรษณีย์</label>
                                    <input type="text" className="form-control" id="postal" />
                                </div>
                                <div className="col-md-12 my-2 col-12">
                                    <label name="tel" className="font-weight-bold" for="tel">เบอร์โทรศัพท์</label>
                                    <input type="text" className="form-control" id="tel" />
                                </div>
                                <div className="col-md-12 my-2 col-12 mb-4">
                                    <label name="email" className="font-weight-bold" for="email">อีเมลล์</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                            </div>
                        </form>
                        <div className="col-md-12 col-12 text-left">
                            <button className="btn btn-checkout shadow " onClick={() => Router.push('/payment')}>ยืนยันคำสั่งซื้อ</button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Checkout;
