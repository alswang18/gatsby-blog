import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import contactStyles from './contact.module.scss'
const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h2>Contact</h2>
            <div>
            <p> Get in contact via social media or via old-reliable e-mail.</p>
            <ul>
                <a href="https://www.linkedin.com/in/alec-sy-wang-246924156/" target="_blank" rel="noreferrer"><h1 className={contactStyles.blueIcon}><i class="fa fa-linkedin"></i></h1></a>
                <a href="https://github.com/alswang18" target="_blank" rel="noreferrer"><h1 className={contactStyles.icon}><i class="fa fa-github"></i></h1></a>
                <a href = "https://www.facebook.com/alec.wang.12" target="_blank" rel="noreferrer"><h1 className={contactStyles.blueIcon}><i class="fa fa-facebook"></i></h1></a>
            </ul>
            <p>
                I am currently open to opportunities in consulting, data science, web scraping, and full-stack web development.
            </p>
            <p>
                I am always happy to interact and collaborate peple who share the same missions or interests as I do. If you have a cool project you want to collaborate on and have features on the website, reach out to me on any of the platforms listed above.
            </p>
            </div>
        </Layout>   
    )
}

export default ContactPage