import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyles from './header.module.scss';
const Header = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
    `)
    return (
        <header className={headerStyles.header}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1><Link className={headerStyles.title} activeClassName={headerStyles.activeNavItem}to="/">
                {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
                            Home
                        </Link>
                    </li> 
                    <li>
                        <Link  className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link  className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link  className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">
                            Contact
                        </Link>   
                    </li>
                    <li>
                        <a href="https://www.notion.so/Alec-Notion-884e900a5379449bac1afa36f5ce0f39" target="_blank" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} >
                            Notion
                        </a> 
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/alec-sy-wang-246924156/" target="_blank" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} >
                            <i class="fa fa-linkedin"></i>
                        </a> 
                    </li>
                    <li>
                        <a href="https://github.com/alswang18" target="_blank" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">
                            <i class="fa fa-github"></i>
                        </a>  
                    </li>
                    <li>
                        <a href="https://www.facebook.com/alec.wang.12" target="_blank" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                </ul> 
            </nav>
            <hr/>
        </header> 
        
    )
}

export default Header