import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';

const Signin = () => {
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
                        <form className="text-left row ">
                            <div className="col-12">
                                <div className="form-group">
                                    <label for="email">อีเมลล์</label>
                                    <input type="email" className="form-control" id="email" placeholder="โปรดกรอกอีเมลล์" />
                                </div>
                            </div>
                           
                            <div className="col-12">
                                <div className="form-group">
                                    <label for="Password">รหัสผ่าน</label>
                                    <input type="password" className="form-control" id="Password" placeholder="โปรดกรอกรหัสผ่าน" />
                                </div>
                            </div>
                           
                            <div className="col-12 text-right">
                                <button type="submit" className="btn btn-primary w-25">เข้าสู่ระบบ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Signin;