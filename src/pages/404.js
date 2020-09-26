import React from 'react'
import Layout from '../components/layout';
import Head from '../components/head'
const page404 = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Error 404. The page your looking for ain't here buddy.</h1>
        </Layout>
    )
}

export default page404