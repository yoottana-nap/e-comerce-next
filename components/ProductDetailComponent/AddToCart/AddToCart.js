import React from 'react';
const AddToCart = (props) => {
    let { item, resType } = props;
    let SizeProduct = [32, 34, 36, 38, 40]
    return (
        <div className="container">
            <style jsx>
            {`
            // Add To Cart
            .BAHT {
                font-family: Kanit;
                font-size: 30px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: normal;
                text-align: left;
                color: #4268b3;
            }
            
            .btn-size {
                background: none;
                border: none;
                width: 55px;
                height: 55px;
                margin-left: 32px;
                border-radius: 5px;
                border: solid 1px #bcbcbc;
                background-color: #ffffff;
                outline: none;
                font-weight: bold;
            }
            
            .btn-subtack {
                width: 30px;
                height: 55px;
                font-weight: bold;
                border: solid 1px #bcbcbc;
                background-color: #ffffff;
                outline: none;
            }
            
            .btn-addtack {
                width: 30px;
                height: 55px;
                color: #fff;
                border: solid 1px #bcbcbc;
                background-color: #707070;
            }
            
            .input-amount {
                width: 100px;
                height: 55px;
                border: solid 1px #bcbcbc;
                background-color: #ffffff;
                padding-left: 5px;
                outline: none;
            }
            
            .input-amount::placeholder {
                font-size: 30px;
                font-family: Kanit;
                text-align: center;
                color: #707070;
            }
            
            .add-cart {
                width: 263px;
                height: 55px;
                border: solid 1px #707070;
                background-color: #000000;
                font-family: Kanit;
                font-size: 30px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: normal;
                text-align: center;
                color: #ffffff;
                outline: none;
            }
                        
            @media only screen and (max-width: 991.98px) {

                .BAHT {
                    font-family: Kanit;
                    font-size: 18px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: normal;
                    text-align: left;
                    color: #4268b3;
                }
            
                .btn-size {
                    background: none;
                    border: none;
                    width: 55px;
                    height: auto;
                    margin-left: 15px;
                    border-radius: 5px;
                    border: solid 1px #bcbcbc;
                    background-color: #ffffff;
                }
            
                .add-cart,
                .input-amount::placeholder {
                    font-size: 18px;
                }
            }
            `}
            </style>
            <div className="row">
                <div className="my-3 col-12 text-left">
                    <h5 className="BAHT">
                        {parseInt(item.price).toLocaleString()} {`THB`}
                    </h5>
                </div>
                {resType !== "Bags" &&
                    <div className="mb-3 col-12 text-left">
                        <div className="d-flex flex-row">
                            <h5 className="text-secondary h-100 pt-3">
                                SIZE
                        </h5>
                            {SizeProduct.map((size, index) => {
                                return <button key={index} className="btn-size">
                                    {size}
                                </button>
                            })}
                        </div>
                    </div>
                }
                <div className="my-3 col-12 text-left">
                    <div className="d-flex flex-row">
                        <button className="btn-subtack">-</button>
                        <input className="input-amount" value={1} placeholder={1} type="number" value=""></input>
                        <button className="btn-addtack">+</button>
                    </div>
                </div>
                <div className="my-3 col-12 text-left">
                    <div className="d-flex flex-row">
                        <button className="add-cart">
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToCart;
