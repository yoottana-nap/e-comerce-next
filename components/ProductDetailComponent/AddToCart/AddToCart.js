import React from 'react';
import './addToCart.scss'
const AddToCart = (props) => {
    let { item, resType } = props;
    let SizeProduct = [32, 34, 36, 38, 40]
    return (
        <div className="container">
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
