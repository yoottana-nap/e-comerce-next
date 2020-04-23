import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import ShowDetail from '../components/ProductDetailComponent/ShowDetail';
const ProductDetail = (props) => {
    let { resId, resType, resData } = props;
    return (
        <MainLayout>
            {resData.map(data => {
               return data.type === resType && data.items.map((item, index) => {
                    return parseInt(resId) === item.id && <ShowDetail resType={resType} key={index} item={item}/>
                })
            })}
        </MainLayout>
    )
}

ProductDetail.getInitialProps = async ({ query }) => {
    const api = await import('../mockup/mockup.json')
    const res = await api.data;
    return { resData: res, resId: query.id, resType: query.type }
}

export default ProductDetail;
