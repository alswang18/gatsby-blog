import React from 'react';
import Layout from '../components/layout';
import blogStyles from './blog.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby';
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql` 
    query{
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }){
            edges{
                node{
                    frontmatter{
                        title
                        date
                        description
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
`)
    return (
        <Layout>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <div>Blog posts are the results of projects, analyses on ideas and issues, or reviews on media I heavily engaged with. My favorite topics involve literature, software engineering, design, entrepreneurship, and of course data science and analytics.</div>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge)=>{
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <br/>
                                <p>{edge.node.frontmatter.date}</p>
                                <p><strong>{edge.node.frontmatter.description}</strong></p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage