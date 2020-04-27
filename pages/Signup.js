import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';

const Signup = () => {
    return (
        <MainLayout>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-5">
                        <img src="signup.jpg" className="w-100" />
                    </div>
                    <div className="col-md-6 mt-5">
                        <h5 className="mt-5">
                            สมัครสมาชิก
                        </h5>
                        <form className="text-left row my-5">
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label for="firstName">ชื่อจริง</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="โปรดกรอกชื่อจริง" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label for="lastName">นามสกุล</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="โปรดกรอกนามสกุล" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label for="email">อีเมลล์</label>
                                    <input type="email" className="form-control" id="email" placeholder="โปรดกรอกอีเมลล์" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label for="confirmEmail">ยืนยันอีเมลล์</label>
                                    <input type="email" className="form-control" id="confirmEmail" placeholder="โปรดกรอกอีเมลล์อีกครั้ง" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label for="Password">รหัสผ่าน</label>
                                    <input type="password" className="form-control" id="Password" placeholder="โปรดกรอกรหัสผ่าน" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label for="confirmPassword">ยืนยันรหัสผ่าน</label>
                                    <input type="password" className="form-control" id="confirmPassword" placeholder="โปรดกรอกรหัสผ่านอีกครั้ง" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label for="tel">หมายเลขโทรศัพท์</label>
                                    <input type="tel" className="form-control" id="tel" placeholder="โปรดกรอกหมายเลขโทรศัพท์" />
                                </div>
                            </div>
                            <div className="col-12 text-right">
                                <button type="submit" className="btn btn-primary w-25">สมัครสมาชิก</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Signup;