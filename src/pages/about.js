import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout';
import Head from '../components/head'
const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <p> This is my about.</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
            <h2>About this website</h2>
            <p>This site is built using Markdown and React using the Gatsby framework, and hosted on Netlify. The source for this website is available on my GitHub.</p>
        </Layout>
    )
}

export default AboutPage