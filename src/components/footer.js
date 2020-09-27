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
            <hr />
            <h3>Corrections</h3>
            <p>
                If you see mistakes or want to suggest changes, please <a href="https://github.com/alswang18/gatsby-blog/issues">create an issue</a> on the source repository.
            </p>
            <p className={footerStyles.end}>
                © Copright 2020 -<span> {(new Date().getFullYear())}</span> {data.site.siteMetadata.author}.
            </p>
            <p className={footerStyles.end}>
                Opinions expressed here represent my own and not those of my employer. Content on this site is subject to policies.
            </p>
            
        </footer>
    )
}

export default Footer