import React from 'react';
import Router from 'next/router';
import '../CardProduct/Card.scss';

const Card = (props) => {
    const { product_name, price_product, images_product, id_product, product_type } = props;
    let cost = 9200, name = "PURE BLUE JAPAN XX-005 – INDIGO", image_test = "https://www.navycapthai.com/wp-content/uploads/2016/11/%E0%B8%81%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%87%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%99%E0%B8%B2%E0%B8%A7%E0%B8%B5.jpg";
    const imageList = {
        "imageFirst": images_product !== undefined ? images_product[0] : image_test,
    }

    return (
        <React.Fragment>
            <style jsx>{`
                .wrapper-image-card{
                    border: 0.8px solid #e8e8e8;
                    position: relative;
                    padding: 55.25% 0;
                    overflow: hidden;
                }
                .image-card {
                    position:  absolute;
                    width:100%;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    text-align: center;
                    background-image:  url(${imageList.imageFirst});
                    background-size:cover;
                    background-repeat:no-repeat;
                    cursor:pointer;
                 }
                 .wrapper-image-card:hover{
                    transition: .5s ease;
                    box-shadow: 10px 7px 18px -6px rgba(0,0,0,0.5);
                    transform: translateY(-5px);
                 }
            }
        `}
            </style>
            <div className="card-container">
                <div className="wrapper-image-card">
                    <div className="image-card" onClick={() => Router.push({
                        pathname: "/ProductDetail",
                        query: { id: id_product, type: product_type },
                    })}>
                    </div>
                </div>
                <div className="card-detail ml-auto mt-3">
                    {product_name === undefined ? name : product_name}
                </div>
                <div className="bath  ml-auto">{price_product === undefined ? cost.toLocaleString() : parseInt(price_product).toLocaleString()} THB</div>
            </div>
        </React.Fragment >
    )
}

export default Card;