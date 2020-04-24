import React, { useEffect } from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import ShowDetail from '../components/ProductDetailComponent/ShowDetail';
import { mapDispatchToProps } from '../components/ProductDetailComponent/AddToCartContainer';
import { connect } from 'react-redux';
const ProductDetail = (props) => {
    let listItem = [];
    let { resId, resType, resData,fetchingApi } = props;
    useEffect(() => {
        resData.forEach(dataArr => {
           return dataArr.items.forEach(item => {
               listItem.push(item)
               fetchingApi(listItem);
            })
        });
    },[]);
    return (
        <MainLayout>
            {resData.map(data => {
                return data.type === resType && data.items.map((item, index) => {
                    return parseInt(resId) === item.id && <ShowDetail resType={resType} key={index} item={item} />
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

export default connect(state => state.cartreducer, mapDispatchToProps)(ProductDetail);
