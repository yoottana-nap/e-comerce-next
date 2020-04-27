import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
const Order = () => {
    return (
        <MainLayout>
            <style jsx>
                {`
                     .underline{
                        border-bottom:1.5px solid #c0c0c0;
                    }
                    
                    .wrapper-status-bar{
                        background: #e6e6e6b8;
                        width:100%;
                        height:2px;
                        conent:''
                        z-index: -10;
                        position:relative;
                        margin-top:75px;
                        margin-bottom:75px;
                    }
                    .container-status{
                        top:-15px;
                        position:relative;
                    }
                   .container-status .status{
                        background:#fff;
                        border:.5px solid #707070;
                        border-radius:100%;
                        content:"";
                        width:30px;
                        height:30px;
                        z-index:1
                    }
                `}
            </style>
            <div className="container my-5 mx-auto">
                <div className="row">
                    <div className="col-12">
                        <h5 className="text-left font-weight-bold mb-5">
                            order
                    </h5>
                    </div>
                    <div className="col-12 my-2">
                        <div className="container pb-3 underline">
                            <div className="row">
                                <div className="col-md-4 col-12">
                                    <div className="w-100">
                                        <img className="w-50" src={"https://drive.google.com/uc?id=1DenYzjbpoKKN2hFqZhiHXOG4YgLDqWWa"} alt={""} />
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 text-left  text-muted">
                                    <h3 className="pb-2">Plant</h3>
                                    <h3 className="pb-2">Size : 32</h3>
                                    <p className="pb-2">PRONTO-CLERK-TROUSERS-OCEAN</p>
                                    <p className="pb-2"><b>Quantity: 5</b></p>
                                </div>
                                <div className="col-md-4 col-12 text-left">
                                    <h5 className="price-product"><b>5,000 บาท</b></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2 mb-5">
                        <div className="container pb-3 underline">
                            <div className="row">
                                <div className="col-md-4 col-12">
                                    <div className="w-100">
                                        <img className="w-50" src={"https://drive.google.com/uc?id=1ByRDbmZez2AFLEW37_Du5gMrxjzKzzo7"} alt={""} />
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 text-left  text-muted">
                                    <h3 className="pb-2">Plant</h3>
                                    <h3 className="pb-2">Size : 32</h3>
                                    <p className="pb-2">PRONTO-CLERK-TROUSERS-OCEAN</p>
                                    <p className="pb-2"><b>Quantity: 5</b></p>
                                </div>
                                <div className="col-md-4 col-12 text-left">
                                    <h5 className="price-product"><b>5,000 บาท</b></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                        <div className="wrapper-status-bar">
                            <div className="container-status">
                                <div className="d-flex justify-content-between">
                                    <div className="status bg-dark"></div>
                                    <div className="status"></div>
                                    <div className="status"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Order;