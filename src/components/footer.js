import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import footerStyles from './footer.module.scss';
const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }
    `)
    return (
        <footer className={footerStyles.footer}>
            <p>
                © Copright 2020-<span id="currentyear"> {(new Date().getFullYear())} {data.site.siteMetadata.author}.</span>
            </p>
            
        </footer>
    )
}

export default Footer