import React from 'react';
import Head from 'next/head';
import Navigation from '../Navigation/Navigation';
const MainLayout = (props) => {
    return (
        <div>
            <Head>
                <title>
                    e-comerce development
                </title>
            </Head>
            <Navigation />
            {props.children}
        </div>
    )
}

export default MainLayout;