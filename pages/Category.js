import React from 'react';
import fetch from 'isomorphic-fetch';
import MainLayout from '../components/MainLayout/MainLayout';
import Banner from '../components/Banner/Banner';
import Card from '../components/CardProduct/Card';

const Category = (props) => {
    let { routeName, dataJson } = props;

    return (
        <MainLayout>
            {
                routeName && 
                <Banner paddingBanner="5.25%" imageSrc={routeName === "Pants" ? "/plant.jpg" : "BannerHome.jpg"} routeName={routeName} />
            }

            <div className="container-fluid mb-3">
                <div className="row m-5">
                    {
                        dataJson.map((data, index) => {
                            return data.type === routeName ? (
                                <div key={index} className="col-md-4 col-12">
                                    <Card id_product={data._id} product_type={data.type} images_product={data.images} price_product={data.price} product_name={data.name} />
                                </div>
                            ) : ''
                        })
                    }
                </div>
            </div>
        </MainLayout>
    )
}

Category.getInitialProps = async ({ query }) => {
    let url_dev = "http://localhost:5000/routes/api/products"
    const api = await fetch(url_dev)
    let name = query.name;
    const json = await api.json();
    return { routeName: name, dataJson: json }
}
export default Category;