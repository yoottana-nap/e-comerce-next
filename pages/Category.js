import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import Banner from '../components/Banner/Banner';
import Card from '../components/CardProduct/Card';

const Category = (props) => {
    let { routeName, dataJson } = props;
    return (
        <MainLayout>
            {dataJson.map((data, index) => {
                return (
                    data.type === routeName &&
                    <Banner key={index} paddingBanner="5.25%" imageSrc={data.image_banner} routeName={data.type} />
                )
            })
            }

            <div className="container-fluid mb-3">
                <div className="row m-5">
                    {
                        dataJson.map((data) => {
                            return data.type === routeName && data.items.map((item, index) => {
                                return (
                                    <div key={index} className="col-md-4 col-12">
                                        <Card id_product={item.id} product_type={data.type} images_product={item.images} price_product={item.price} product_name={item.name} />
                                    </div>
                                )
                            })
                        })
                    }
                </div>
            </div>
        </MainLayout>
    )
}

Category.getInitialProps = async ({ query }) => {
    const api = await import('../mockup/mockup.json')
    let data = query.name
    return { routeName: data, dataJson: api.data }
}

export default Category;
