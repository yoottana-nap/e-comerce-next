import React from 'react';
import Head from 'next/head';
import NavigationContainer from '../Navigation/NavigationContainer';
import '../../assets/styles.scss';

const MainLayout = (props) => {
    return (
        <div>
            <Head>
                <title>
                    e-comerce development
                </title>
            </Head>
            <div className="container-web">
                <NavigationContainer />
            </div>
                <div className="container-web">
                    {props.children}
                </div>
        </div>
    )
}

export default MainLayout;