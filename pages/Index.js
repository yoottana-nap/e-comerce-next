import React from 'react';
import fetch from 'isomorphic-fetch'
import MainLayout from '../components/MainLayout/MainLayout';
const Index = (props) => {
    return (
        <MainLayout>
            <h1>
                Hello : {props.name}
                <br/>
                {props.star}
            </h1>
        </MainLayout>
    )
}
Index.getInitialProps = async ({query}) => {
    const api = await fetch(`https://api.github.com/repos/${query.name}`)
    const json = await api.json();
    return {
        name: json.name,
        star: json.stargazers_count
    }
}


export default Index;