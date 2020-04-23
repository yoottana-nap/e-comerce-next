import React, { useState, useEffect, useRef } from 'react';
import './ShowDetail.scss';
import AddToCart from './AddToCart/AddToCart';

const ShowDetail = (props) => {
    let { item, resType } = props;
    const [idx, setIndex] = useState(0);
    const [isFade, setIsFade] = useState(true);

    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }
    
    const prevState = usePrevious(idx);

    useEffect(() => {
        if (prevState !== idx) {
            setIsFade(true);
            setTimeout(
                function () {
                    setIsFade(false);
                }.bind(this), 500);
        }
    }, [idx])

    return (
        <div className="container my-5">
            <style jsx>
                {`
            .wrapper-btn-item img{
                cursor:pointer;
            }
            `}
            </style>
            <div className="row">
                <div className="col-md-5 col-12">
                    <div className="wrapper-img">
                        <img className={`img-responsive ${isFade ? 'fade' : ''}`} src={item.images[idx]} alt="product detail" />
                    </div>
                    <div className="d-flex flex-row my-2">
                        {item.images.map((img, index) => {
                            return (
                                <div key={index} className="wrapper-btn-item">
                                    <img className={`w-100 ${index === idx ? "active" : ""}`} src={img} alt="img product" onClick={() => setIndex(index)} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-md-7 col-12 ml-auto">
                    <h5 className="text-header ml-3">
                        {item.name}
                    </h5>
                    <div className="underline-product-detail mt-4"></div>
                    <AddToCart item={item} resType={resType} />
                </div>
                <div className="col-md-12 col-12">
                    <h3 className="text-left description">
                        <u>
                            DESCRIPTION
                        </u>
                    </h3>
                    <h5 className="text-left  description-subtitle font-weight-bold">
                        Product Description
                    </h5>
                    <p className="description-subtitle">
                        {item.product_title}
                    </p>
                    <h5 className="text-left text-secondary  font-weight-bold">
                        <u>
                            รายละเอียดสินค้า
                        </u>
                    </h5>
                    <p className="description-subtitle">
                        {item.detail}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ShowDetail;
