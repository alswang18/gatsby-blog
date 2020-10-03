import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout';
import Head from '../components/head'
const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h2>About me</h2>
            <p> Hey I'm Alec!</p>
            <p>I am a data-driven software engineer and problem-solver with experience building data solutions in fast growing companies. 
                I am passionate about creating data products that improve people's daily lives.</p>
            <p>I was in <a href="https://www.firstcircle.ph/">First Circle</a> as a Product Intern then transitioned into the Data Team. Before that, I was working in operations or engineering at various B2B SaaS startups: <a href="expedock.com">Expedock</a>, <a href="https://www.exora.ph/">Exora</a>, <a href="https://www.taikuun.com/">Taikuun</a>. I was also employed as a Data Science Bootcamp Associate in <a href="eskwelabs.com">Eskwelabs</a>.</p>
            <p>
                Currently, I am a student in Simon Fraser University working on my BSC Computing Science degree. 
                I was a co-organizer of <a href="https://www.facebook.com/groups/effectivealtruismph">Effective Altruism Philippines</a>, the local chapter of the <a href="effectivealtruism.org">effective altruism (EA) movement</a>, and a co-founder of <a href="https://www.facebook.com/eablue.ph">Effective Altruism Blue</a>, an EA student chapter in Ateneo de Manila University.
            </p>
            <p>You’ll find my thoughts, work, personal and professional interests here.</p>
            <p>If you’re interested in connecting professionally, you can view my profile on LinkedIn or <Link to="/contact">contact me.</Link></p>
            <br/>
            <h2>About this website</h2>
            <p>This site is built using Markdown and <a href="https://reactjs.org/">React</a> using the <a href="https://www.gatsbyjs.com/">Gatsby</a> framework, and hosted on <a href="https://www.netlify.com/">Netlify</a>. The source for this website is available on my <a href="https://github.com/alswang18/gatsby-blog">GitHub.</a></p>
        </Layout>
    )
}

export default AboutPage