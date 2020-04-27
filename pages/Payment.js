import React, { useState } from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Payment = () => {
    const methods = [
        { imageMethod: "KBANK.png", methodName: "ธนาคารกสิกรไทย", methodnumber: "เลขที่บัญชี 0123-456-789", valueMethod: "KBANK" },
        { imageMethod: "BBL.png", methodName: "ธนาคารกรุงเทพ", methodnumber: "เลขที่บัญชี 0123-456-789", valueMethod: "BBL" },
        { imageMethod: "SCB.png", methodName: "ธนาคารไทยพาณิชย์", methodnumber: "เลขที่บัญชี 0123-456-789", valueMethod: "SCB" },
        { imageMethod: "KTB.png", methodName: "ธนาคารกรุงไทย", methodnumber: "เลขที่บัญชี 0123-456-789", valueMethod: "KTB" }
    ]
    const [paymentMethod, setMethod] = useState('');
    return (
        <MainLayout>
            <style jsx>
                {`
                .form-payment{
                    width: 248px;
                    height: 35px;
                    border: solid 1px #707070;
                    background-color: #ffffff;
                }        
                  .btn-submit-payment{
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
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="text-secondary text-center my-4">
                            PAYMENT METHOD
                        </h5>
                    </div>
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 font-weight-bold text-dark my-2 text-left">
                                    Bank
                                </div>
                                {methods.map(index => {
                                    return (
                                        <React.Fragment>
                                            <div className="col-md-2  text-left my-3">
                                                <img src={`${index.imageMethod}`} alt={`${index.imageMethod}`} />
                                            </div>
                                            <div className="col-md-3  text-left my-3">
                                                <span>{`${index.methodName}`}</span>
                                            </div>

                                            <div className="col-md-3  text-left my-3">
                                                <span className=" text-left">{`${index.methodnumber}`}</span>
                                            </div>
                                            <div className="col-md-3  text-left my-3">
                                                <input value={`${index.valueMethod}`} checked={paymentMethod === `${index.valueMethod}` && true} onChange={e => setMethod(e.target.value)} type="radio" /> <span className={paymentMethod === '' ? "text-danger font-weight-bold" : "d-none"}>*</span>
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                                }

                                <div className="col-12 mt-5 mb-3 text-left">
                                    <label className="font-weight-bold" for="date">วันที่โอนเงิน</label>
                                    <br />
                                    <input type="date" id="date" value="0000-00-00" className="form-payment" /> <FontAwesomeIcon className="text-secondary" icon={faCalendarAlt} />
                                </div>
                                <div className="col-12 text-left">
                                    <label className="font-weight-bold" for="time">เวลาที่โอน</label>
                                    <br />
                                    <input type="time" id="time" className="form-payment" />
                                </div>
                                <div className="col-12 text-left">
                                    <label className="font-weight-bold" for="price">จำนวนเงิน</label>
                                    <br />
                                    <input type="text" id="price" className="mb-3 form-payment pl-1" />
                                </div>
                                <div className="col-12 text-left">
                                    <label className="font-weight-bold" for="time">จำนวนเงิน</label>
                                    <br />
                                    <input type="file" className="mb-3" />
                                </div>
                                <div className="col-12 text-left">
                                    <p className="font-weight-bold" for="time">ยืนยันแจ้งชำระเงิน</p>
                                    <button className="btn-submit-payment mb-5" >
                                        ยืนยันแจ้งชำระเงิน
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Payment;
